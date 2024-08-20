// validation.component.ts

import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  commandesEnAttente: any[] = [];
  validationMessage: string = '';
  displayValidationMessage: boolean = false;
  messageTimeout: number = 3000;
  produitLePlusRentable: any;
  utilisateurAvecPlusDeCommandes: any;
  commandesUtilisateur: number = 0;
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.refreshCommandesEnAttente();
    this.getProduitLePlusRentable();
    this.getUtilisateurAvecPlusDeCommandes();
  }

  refreshCommandesEnAttente(): void {
    this.commandeService.getCommandesEnAttente().subscribe(
      (commandes: any[]) => {
        this.commandesEnAttente = commandes;
      },
      error => {
        console.error('Erreur lors de la récupération des commandes en attente :', error);
      }
    );
  }

  validerCommande(idCommande: number): void {
    if (!idCommande) {
      console.error('ID de commande non défini.');
      return;
    }

    this.commandeService.changerStatutCommande(idCommande).subscribe(
      (response: any) => {
        if (response && response.message) {
          this.validationMessage = response.message;
          this.displayValidationMessage = true;

          // Planifier la désactivation du message après la durée spécifiée
          setTimeout(() => {
            this.displayValidationMessage = false;
          }, this.messageTimeout);
  
          // Mettre à jour les commandes après validation
          this.refreshCommandesEnAttente();
        }
      },
      error => {
        console.error('Erreur lors de la validation de la commande :', error);
      }
    );
  }
  getProduitLePlusRentable(): void {
    this.commandeService.getProduitLePlusRentable().subscribe(
      (produit: any) => {
        this.produitLePlusRentable = produit;
      },
      error => {
        console.error('Erreur lors de la récupération du produit le plus rentable :', error);
      }
    );
  }
  getUtilisateurAvecPlusDeCommandes(): void {
    this.commandeService.getUtilisateurAvecPlusDeCommandes().subscribe(
      (response: any) => {
        this.utilisateurAvecPlusDeCommandes = response.user;
        this.commandesUtilisateur = response.totalCommandes;
      },
      error => {
        console.error('Erreur lors de la récupération de l\'utilisateur avec le plus de commandes :', error);
      }
    );
}}
