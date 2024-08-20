import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent {
  prduits: any; 
  constructor(public shared: ProduitService,private router:Router) {}

  ngOnInit(): void {
    this.shared.listeProduit()
      .subscribe(
        res => {
          console.log(res);
          this.prduits = res;
        },
        err => {
          console.log(err);
        }
      ); 
  }

  delete(idProduit: number) {
    console.log("Deleting aide with ID:", idProduit);
    this.shared.supprimerProduit(idProduit)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      ); 

     
  }
  buttonAjouter(){
    this.router.navigate(['admin/ajouterProduit'])
  }
  buttonModifier(id:any){
    this.router.navigate(['admin/modifierProduit/'+id])
  }
}
