import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produitbenefices',
  templateUrl: './produitbenefices.component.html',
  styleUrls: ['./produitbenefices.component.css']
})
export class ProduitbeneficesComponent implements OnInit {
  produitsAvecBenefices: any[] = [];
  beneficeTotal: number = 0;
  tri: string = 'desc'; // Par défaut, le tri est décroissant

  constructor(public shared: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits(): void {
    this.shared.getProduitsAvecBenefices().subscribe(
      (data: any) => {
        this.produitsAvecBenefices = data.produitsAvecBenefices;
        this.beneficeTotal = data.beneficeTotal;
        this.trierProduits();
      },
      error => {
        console.error('Erreur lors de la récupération des produits avec bénéfices :', error);
        // Gérez l'erreur ici
      }
    );
  }

  trierProduits(): void {
    if (this.tri === 'asc') {
      this.produitsAvecBenefices.sort((a, b) => a.benefice - b.benefice);
    } else {
      this.produitsAvecBenefices.sort((a, b) => b.benefice - a.benefice);
    }
  }

  modifierProduit(idProduit: number): void {
    this.router.navigate(['/admin/modifierProduit', idProduit]);
  }
}
