import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/Patient';
import { AlertService } from 'src/app/services/alert.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  patient_Connecter!: Patient;
  ngOnInit(): void {
    const UserConnected_String = localStorage.getItem('Patient');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    console.log(UserConnected)
    if (UserConnected) {
      this.patient_Connecter = {
        idpatient: UserConnected.idpatient,
        user: UserConnected.user,
        typePatient: UserConnected.typePatient,
        archiver: UserConnected.archiver,
        poid: UserConnected.poid,
        longueur: UserConnected.longueur,
        dateDeNaissance: UserConnected.dateDeNaissance,
        sexe: UserConnected.sexe,
        mail: UserConnected.mail,
        prenom: UserConnected.prenom,
        nom: UserConnected.nom,
        x :UserConnected.x,
        y :UserConnected.y,
       adresse:UserConnected.adresse,
      }

      }
 console.log("----- USER PATIENT------");
 console.log(this.patient_Connecter);
 
    }
     constructor(private shared:AlertService,private http :HttpClient){}
 
    creationalertpa(){
      this.shared.AlertPatient(this.patient_Connecter.idpatient)
      .subscribe(
        res => {
          console.log('Réponse réussie:', res);
          alert("Votre alert a été bien prise en compte");
                },
        error => {
          console.log('Erreur:', alert); // Affiche l'objet d'erreur complet dans la console
          if (error.status === 400) {
            console.log('////////', error.error);
            alert(error.error);
          } else {
            alert("Quelque chose s'est mal passé");
          }
        }
      );
  }

    }


