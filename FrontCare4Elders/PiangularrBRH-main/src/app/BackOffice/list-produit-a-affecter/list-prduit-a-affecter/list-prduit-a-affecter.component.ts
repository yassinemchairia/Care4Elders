import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-list-prduit-a-affecter',
  templateUrl: './list-prduit-a-affecter.component.html',
  styleUrls: ['./list-prduit-a-affecter.component.css']
})
export class ListPrduitAAffecterComponent implements OnInit {
  produits!: any[];

  constructor(private route: ActivatedRoute, private router: Router,private shopService: ShopService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idShop = params['idShop'];
      this.getProduits(idShop);
    });
  }

  getProduits(idShop: number): void {
    this.shopService.getAvailableProducts()
      .subscribe(
        res => {
          console.log(res);
          this.produits = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  affecterProduitAuShop(idProduit: number): void {
    const idShop = this.route.snapshot.params['idShop'];
    this.shopService.affecterProduitAuShop(idShop, idProduit)
      .subscribe(
        res => {
          console.log(res);
          alert('Produit affecté au shop avec succès !');
          // Rafraîchir la liste des produits ou effectuer d'autres actions
        },
        err => {
          console.log(err);
          alert('Erreur : Ce produit existe déjà dans ce shop !');
        }
      );
  }

  desaffecterProduitDuShop(idProduit: number): void {
    const idShop = this.route.snapshot.params['idShop'];
    if (confirm('Êtes-vous sûr de vouloir désaffecter ce produit du shop ?')) {
      this.shopService. desaffecterProduitAuShop(idShop, idProduit)
        .subscribe(
          res => {
            console.log(res);
            alert('Produit désaffecté du shop avec succès !');
            // Rafraîchir la liste des produits ou effectuer d'autres actions
          },
          err => {
            console.log(err);
          }
        );
    }
  }
}