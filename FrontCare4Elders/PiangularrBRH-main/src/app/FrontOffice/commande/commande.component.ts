import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionpanierService } from 'src/app/services/gestionpanier.service';
import { ModePay } from 'src/app/FrontOffice/mode-pay.enum';
import { TwilioService } from 'src/app/services/twilio.service';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandeDetails: any;
  modePaiement: string = '';
  numeroCarte: string = '';
  numeroTelephone :string = '';
  dateExpirationMois: string = '';
  dateExpirationAnnee: string = '';
  codeSecurite: string = '';
  moisList: string[] = ['01 - Janvier', '02 - Février', '03 - Mars', '04 - Avril', '05 - Mai', '06 - Juin', '07 - Juillet', '08 - Août', '09 - Septembre', '10 - Octobre', '11 - Novembre', '12 - Décembre'];
  anneeList: string[] = [];
  commandeValidee: boolean = false;
  pays: string = '+216';
  userId:any;
  utilisateurAvecPlusDeCommandesId: any;
  constructor(private gestionPanierService: GestionpanierService, private router: Router, private route: ActivatedRoute,  private twilioService: TwilioService,private commandeService: CommandeService) { }

  ngOnInit(): void {
    const Usercc_String = localStorage.getItem('USER_ID');
    this.userId=Usercc_String? Number(  JSON.parse(Usercc_String )): null;  // Appeler la méthode pour récupérer les produits lors de l'initialisation
 
    this.route.paramMap.subscribe(params => {
      this.commandeDetails = history.state.commandeDetails;
    });
    
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year <= 2040; year++) {
      this.anneeList.push(year.toString());
    }
    this.utilisateurAvecPlusDeCommandesId = localStorage.getItem('UTILISATEUR_PLUS_COMMANDES_ID');
  }

  voirProduits(): void {
    this.router.navigate(['front/produits']);
  }

  onModePaiementChange(mode: string): void {
    this.modePaiement = mode;
  }

  validerCommande(): void {
    if (!this.modePaiement) {
      alert('Veuillez sélectionner un mode de paiement.');
      return;
    }

    if (this.modePaiement === ModePay.CARTE_BANCAIRE) {
      if (!this.numeroCarte || this.numeroCarte.length !== 8) {
        alert('Le numéro de carte doit contenir 8 chiffres.');
        return;
      }

      if (!this.dateExpirationMois || !this.dateExpirationAnnee) {
        alert('Veuillez sélectionner la date d\'expiration de la carte.');
        return;
      }

      if (!this.codeSecurite || this.codeSecurite.length !== 3) {
        alert('Le code de sécurité doit contenir 3 chiffres.');
        return;
      }
      if (!this.numeroTelephone || this.numeroTelephone.length !== 8) {
        alert('Le numéro de téléphone doit contenir 8 chiffres.');
        return;
      }
    
    }
    if (this.userId === this.utilisateurAvecPlusDeCommandesId) {
      // Appliquer la réduction de 15% sur le montant total
      this.commandeDetails.montantTotal *= 0.85;
    }
    const numeroComplet = this.pays + this.numeroTelephone;
    const idPanier: number = 1;
    const montantTotal: number = this.commandeDetails.montantTotal;
    const modePay: ModePay = ModePay[this.modePaiement as keyof typeof ModePay];
    const dateExpiration: Date = new Date(Number(this.dateExpirationAnnee), Number(this.dateExpirationMois) - 1);
    const body = {
      montantTotal,
      modePay,
      dateExpiration,
      codeSecurite: this.codeSecurite,
      numeroCarte: this.numeroCarte,
      numeroTelephone: this.numeroTelephone
    };

    this.gestionPanierService.ajouterCommande(this.userId,idPanier, montantTotal, modePay).subscribe(
      (response: any) => {
        // Si le téléchargement PDF est réussi, on télécharge le fichier
        const blob = new Blob([response], { type: 'application/pdf' });
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.setAttribute('download', 'commande_details.pdf');
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // Affichage d'un message de succès
        alert('Commande validée avec succès. Téléchargement du PDF en cours.');

        // Marquer la commande comme validée et vider les détails de la commande
        this.commandeValidee = true;
        this.commandeDetails = null;
        this.twilioService.sendMessage('Votre commande a été validée avec succès. Merci!',  numeroComplet)
        .subscribe(
          (response: any) => {
            console.log('Message Twilio envoyé avec succès :', response);
            // Affichez un message de succès si nécessaire
          },
          error => {
            console.error('Erreur lors de l\'envoi du message Twilio :', error);
            // Gérez l'erreur ici
          }
        );
      },
      error => {
        console.error('Erreur lors de la confirmation de la commande :', error);
        alert('Erreur lors de la confirmation de la commande. Veuillez réessayer plus tard.');
      }
    );
  }
}