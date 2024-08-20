import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/Medecin';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alertmedecin',
  templateUrl: './alertmedecin.component.html',
  styleUrls: ['./alertmedecin.component.css']
})
export class AlertmedecinComponent implements OnInit{
  medcin_Connecter!: Medecin;
  alertss: any; 

  constructor(private shared: AlertService,private router:Router) {}

  ngOnInit(): void {
    const UserConnected_String = localStorage.getItem('MEDECIN');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    this.medcin_Connecter ={
    idMedecin: UserConnected. idMedecin,
     user: UserConnected.user,
     specialite: UserConnected.specialite,
     disponible: UserConnected.disponible,
     nom:UserConnected.nom,
     prenom:UserConnected.prenom,
     mail:UserConnected.mail,
     x :UserConnected.x,
     y :UserConnected.y,
    adresse:UserConnected.adresse,
 
 
 }
 console.log("----- USER medecin------");
 console.log(this.medcin_Connecter);

 this.shared.getAlertByMedecin(this.medcin_Connecter.idMedecin)
      .subscribe(
        res => {
          console.log(res);
          this.alertss = res;
        },
        err => {
          console.log(err);
        }
      ); 

    }
    accteptermedecin(idalert:number){
      console.log(idalert)
      console.log(this.medcin_Connecter.idMedecin)
      this.shared.accteptermedecin(this.medcin_Connecter.idMedecin,idalert).subscribe(
  

        
        err => {
          console.log(err);
        }
      ); 
    }

    
}
