import { Component } from '@angular/core';
import { AjouteraffAmbulanceService } from 'src/app/services/ajouteraff-ambulance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-ambulance',
  templateUrl: './liste-ambulance.component.html',
  styleUrls: ['./liste-ambulance.component.css']
})
export class ListeAmbulanceComponent {
  listeAmbulance: any; 
  constructor(private shared: AjouteraffAmbulanceService,private router:Router) {}
  ngOnInit(): void {
    this.getallambulance()
  }
  getallambulance(){
    this.shared.listeAmbulance()
      .subscribe(
        res => {
          console.log(res);
          this.listeAmbulance = res;
        },
        err => {
          console.log(err);
        }
      ); 
  }
  buttonDetail(id:any){
    this.router.navigate(['admin/detailAmbulance/'+id])
  }
  DeleteAmbulance(id:any){
    this.shared.supprimerAmbulance(id).subscribe(()=>
    this.getallambulance())
    }
    buttonUpdate(id:any){
      this.router.navigate(['admin/UpdateAmbulance/'+id])
    }

    buttonAjouter(){
      this.router.navigate(['admin/ajouterAmbulance'])
    }
    buttonModifierAmbulancier(id:any){
      this.router.navigate(['admin/UpdateAmbulancierAmbulance/'+id])
    }
  }

