import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AjouteraffAmbulanceService } from 'src/app/services/ajouteraff-ambulance.service';

@Component({
  selector: 'app-liste-ambulancier',
  templateUrl: './liste-ambulancier.component.html',
  styleUrls: ['./liste-ambulancier.component.css']
})
export class ListeAmbulancierComponent {
  ambulanciers:any
  constructor(private shared: AjouteraffAmbulanceService,private router:Router) {}
  ngOnInit(): void {
    this.shared.listeAmbulancier()
      .subscribe(
        res => {
          console.log(res);
          this.ambulanciers = res;
        },
        err => {
          console.log(err);
        }
      ); 
  }
  delete(idAmbulancier: number) {
    console.log("Deleting aide with ID:", idAmbulancier);
    this.shared.supprimerAmbulancier(idAmbulancier)
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
    this.router.navigate(['admin/ajouterAmbulancier'])
  }
  buttonModifier(id:any){
    this.router.navigate(['admin/modifierrAmbulancier/'+id])
  }

}



