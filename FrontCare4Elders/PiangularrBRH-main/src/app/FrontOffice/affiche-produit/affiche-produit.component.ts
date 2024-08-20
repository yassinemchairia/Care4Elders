import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GestionpanierService } from 'src/app/services/gestionpanier.service';
import { ProduitService } from 'src/app/services/produit.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-affiche-produit',
  templateUrl: './affiche-produit.component.html',
  styleUrls: ['./affiche-produit.component.css']
  
})
export class AfficheProduitComponent implements OnInit{
  produits: any;
  idPanier: number = 1; 
  successMessage: string = '';
  errorMessage: string = '';
  nombreTotalProduits: number = 0; // Variable pour stocker le nombre total de produits dans le panier
  triParPrix: string = 'ascendant';
  currentPage: number = 1; // Page actuelle
  productsPerPage: number = 4; // Nombre de produits par page
  idUtilisateur: number = 1;
  displayValidationMessage: boolean = false;
  messageTimeout: number = 3000;
  produitsFavoris: any[] = [];
  userId:any;
  produitLePlusCommande: any;
  constructor(public _shared: ProduitService, private router: Router, public _gestionPanier: GestionpanierService) {}

  ngOnInit(): void {
    this.getProduits();
    const Usercc_String = localStorage.getItem('USER_ID');
    this.userId=Usercc_String? Number(  JSON.parse(Usercc_String )): null;  // Appeler la méthode pour récupérer les produits lors de l'initialisation
    this.getProduitsFavoris();
    this.getProduitLePlusCommande(); 
   
  }

  getProduits(): void {
    this._shared.listeProduit()
      .subscribe(
        res => {
          console.log(res);
          this.produits = res;
          // Tri par défaut lors du chargement initial
          this.trierProduits();
          this.updateProduitsFavorisState();
        },
        err => {
          console.log(err);
        }
      );
  }
  getProduitsFavoris(): void {
    this._shared.getProduitsFavoris(this.userId).subscribe(
      produitsFavoris => {
        this.produitsFavoris = produitsFavoris;
        this.updateProduitsFavorisState();
      },
      err => {
        console.error('Erreur lors de la récupération des produits favoris :', err);
      }
    );
  }
  updateProduitsFavorisState(): void {
    this.produits.forEach((produit: any)  =>{
      produit.favoris = this.isProduitFavori(produit);
    });
  }
 
  getProduitLePlusCommande(): void {
    this._shared.getProduitLePlusCommande().subscribe(
      (produitLePlusCommande) => {
        this.produitLePlusCommande = produitLePlusCommande;
      },
      (erreur) => {
        console.error('Erreur lors de la récupération du produit le plus commandé :', erreur);
      }
    );
  }
  isProduitFavori(produit: any): boolean {
    return this.produitsFavoris.some(pf => pf.idProduit === produit.idProduit);
  }
  ajouterAuxFavoris(produit: any): void {
    this._shared.ajouterProduitAuxFavoris(this.userId, produit.idProduit).subscribe(
      () => {
        produit.favoris = true; // Mettre à jour l'état du produit dans les favoris
        produit.successMessage = 'Produit ajouté aux favoris avec succès.';
        setTimeout(() => {
          produit.successMessage = ''; // Effacer le message après quelques secondes
        }, 3000); // 3 secondes
      },
      err => {
        console.log('Erreur lors de l\'ajout du produit aux favoris :', err);
        if (err.status === 409) {
          produit.errorMessage = 'Le produit est déjà dans les favoris de l\'utilisateur.';
        } else {
          produit.errorMessage = 'Erreur lors de l\'ajout du produit aux favoris.';
        }
        setTimeout(() => {
          produit.errorMessage = ''; // Effacer le message après quelques secondes
        }, 3000); // 3 secondes
      }
    );
  }
  supprimerDesFavoris(produit: any): void {
    this._shared.supprimerProduitDesFavoris(this.userId, produit.idProduit).subscribe(
      () => {
        produit.favoris = false; // Mettre à jour l'état du produit dans les favoris
        produit.successMessage = 'Produit supprimé des favoris avec succès.'; 
        setTimeout(() => {
          produit.successMessage = '';
        }, 3000);
         // Afficher un message de succès
      },
      err => {
        console.log('Erreur lors de la suppression du produit des favoris :', err);
        // Traitez l'erreur ici
      }
    );
  }
  rechercherProduitsParNom(event: any): void {
    const nomproduit = event.target.value;
    // Vérifier si la valeur n'est pas null ou undefined avant de faire quoi que ce soit
    if (nomproduit !== null && nomproduit !== undefined) {
      this._shared.rechercherProduitsParNom(nomproduit).subscribe(
        res => {
          console.log(res);
          this.produits = res;
          // Mettre à jour l'affichage des produits
          // (vous pouvez trier les produits ou effectuer d'autres opérations nécessaires)
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  getTotalPages(): number {
    return Math.ceil(this.produits.length / this.productsPerPage);
  }

  // Méthode pour obtenir les produits pour la page actuelle
  getPaginatedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    return this.produits.slice(startIndex, endIndex);
  }

  // Méthode pour passer à la page suivante
  nextPage(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  // Méthode pour passer à la page précédente
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  trierProduits(): void {
    // Si l'option sélectionnée est 'ascendant', trier les produits par prix croissant
    if (this.triParPrix === 'ascendant') {
      this.produits.sort((a: any, b: any) => a.prix - b.prix);
    } else if (this.triParPrix === 'descendant') {
      // Si l'option sélectionnée est 'descendant', trier les produits par prix décroissant
      this.produits.sort((a: any, b: any) => b.prix - a.prix);
    }
  }

 addToPanier(event: Event, produit: any): void {
    event.preventDefault(); // Empêcher le comportement par défaut du lien

    this._gestionPanier.checkProduitExistenceDansPanier(this.idPanier, produit.idProduit).subscribe(
      existe => {
        if (existe) {
          // Le produit existe déjà dans le panier
          produit.errorMessage = 'Ce produit est déjà ajouté au panier.';
          setTimeout(() => {
            produit.errorMessage = ''; // Effacer le message après quelques secondes
          }, 3000); // 3 secondes
        } else {
          // Le produit n'existe pas encore dans le panier, l'ajouter
          this._gestionPanier.addProduitToPanier(this.idPanier, produit.idProduit).subscribe(
            res => {
              console.log('Produit ajouté au panier avec succès :', res);
              produit.successMessage = 'Produit ajouté au panier avec succès.';
              setTimeout(() => {
                produit.successMessage = ''; // Effacer le message après quelques secondes
              }, 3000); // 3 secondes

              // Mettre à jour le nombre de produits dans le panier
              window.location.reload();
              this.calculerNombreTotalProduits();
            },
            err => {
              console.log('Erreur lors de l\'ajout au panier :', err);
              // Traitez l'erreur ici
            }
          );
        }
      },
      err => {
        console.log('Erreur lors de la vérification de l\'existence du produit dans le panier :', err);
        // Traitez l'erreur ici
      }
    );
  }

  calculerNombreTotalProduits(): void {
    this._gestionPanier.calculerNombreProduitsDansPanier(this.idPanier).subscribe(
      nombre => {
        this.nombreTotalProduits = nombre;
      },
      err => {
        console.log('Erreur lors du calcul du nombre total de produits dans le panier :', err);
        // Traitez l'erreur ici
      }
    );
  }
  
}