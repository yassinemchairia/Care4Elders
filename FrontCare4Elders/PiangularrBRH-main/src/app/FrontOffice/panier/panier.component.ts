import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionpanierService } from 'src/app/services/gestionpanier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produitsDansPanier: any[] = [];
  montantTotal: number = 0;
  panierVide: boolean = true; // Variable pour contrôler l'affichage du bouton "Commencer vos achats"

  constructor(private gestionPanierService: GestionpanierService,private router: Router) { }

  ngOnInit(): void {
    // Chargez les produits dans le panier lors du chargement du composant
    this.loadProduitsDansPanier();
  }
  
  loadProduitsDansPanier(): void {
    const idPanier = 1; // Remplacez par l'ID du panier que vous souhaitez charger
    this.gestionPanierService.getProduitsDansPanier(idPanier)
      .subscribe(
        (data: any[]) => {
          this.produitsDansPanier = data;
          this.panierVide = this.produitsDansPanier.length === 0; // Vérifiez si le panier est vide
          this.calculerMontantTotal();
        },
        error => {
          console.log('Erreur lors du chargement des produits du panier :', error);
        }
      );
  }
  commencerVosAchats(): void {
    // Redirigez l'utilisateur vers la page affichant les produits
    this.router.navigate(['produits']); // Assurez-vous que le chemin est correct selon votre configuration
  }
  checkPanierVide(): void {
    const idPanier = 1; // Remplacez par l'ID du panier que vous souhaitez vérifier
    this.gestionPanierService.checkPanierVide(idPanier)
      .subscribe(
        (vide: boolean) => {
          this.panierVide = vide;
        },
        error => {
          console.log('Erreur lors de la vérification si le panier est vide :', error);
        }
      );
  }
  passerCommande(): void {
    const commandeDetails = {
      produitsDansPanier: this.produitsDansPanier,
      montantTotal: this.montantTotal // Vous pouvez ajuster ceci selon le choix de l'utilisateur
    };
  
    // Redirigez l'utilisateur vers la page de commande
    this.router.navigate(['commande'], { state: { commandeDetails } });
  }
  
  supprimerProduit(idProduit: number): void {
    const idPanier = 1; // Remplacez par l'ID du panier que vous souhaitez modifier
  
    // Affiche une boîte de dialogue de confirmation
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer ce produit du panier ?');
  
    if (confirmation) {
      this.gestionPanierService.removeProduitFromPanier(idPanier, idProduit)
        .subscribe(
          () => {
            console.log('Produit supprimé avec succès.');
            // Rafraîchit toute la page après la suppression du produit
            window.location.reload();
          },
          error => {
            console.log('Erreur lors de la suppression du produit :', error);
          }
        );
    }
  }
  updateQuantite(produit: any, nouvelleQuantite: number): void {
    produit.quantite = nouvelleQuantite;
    this.calculerMontantTotal();
  }

  incrementQuantite(produit: any): void {
    produit.quantite++;
    this.calculerMontantTotal(); // Mettre à jour le montant total après chaque modification de la quantité
  }

  // Méthode pour décrémenter la quantité
  decrementQuantite(produit: any): void {
    if (produit.quantite > 1) {
      produit.quantite--;
      this.calculerMontantTotal(); // Mettre à jour le montant total après chaque modification de la quantité
    }
  }

  // Méthode pour calculer le montant total du panier
  calculerMontantTotal(): void {
    this.montantTotal = this.produitsDansPanier.reduce((total, produit) => total + (produit.prix * produit.quantite), 0);
  }
}
