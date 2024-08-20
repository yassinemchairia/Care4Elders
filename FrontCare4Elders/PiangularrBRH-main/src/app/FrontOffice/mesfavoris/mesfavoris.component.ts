import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-mesfavoris',
  templateUrl: './mesfavoris.component.html',
  styleUrls: ['./mesfavoris.component.css']
})
export class MesfavorisComponent implements OnInit {
  produitsFavoris: any[] = []; // Tableau pour stocker les produits favoris
  userId:any;
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
   
    const Usercc_String = localStorage.getItem('USER_ID');
    this.userId=Usercc_String? Number(  JSON.parse(Usercc_String )): null;
    this.getProduitsFavoris();
  }

  getProduitsFavoris(): void {
    this.produitService.getProduitsFavoris(this.userId).subscribe(
      (produits: any[]) => {
        this.produitsFavoris = produits;
      },
      error => {
        console.error('Erreur lors de la récupération des produits favoris :', error);
      }
    );
  }

  supprimerProduitFavori(idProduit: number): void {
    // Appeler le service pour supprimer le produit favori
    this.produitService.supprimerProduitDesFavoris(this.userId, idProduit).subscribe(
      () => {
        // Mettre à jour la liste des produits favoris après la suppression
        this.getProduitsFavoris();
      },
      error => {
        console.error('Erreur lors de la suppression du produit favori :', error);
      }
    );
  }
}

