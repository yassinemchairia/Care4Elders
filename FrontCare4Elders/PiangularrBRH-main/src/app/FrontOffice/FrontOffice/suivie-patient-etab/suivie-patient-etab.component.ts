import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { PatientService } from 'src/app/services/patient.service';
import { Medecin } from '../../models/Medecin';

@Component({
  selector: 'app-suivie-patient-etab',
  templateUrl: './suivie-patient-etab.component.html',
  styleUrls: ['./suivie-patient-etab.component.css']
})
export class SuiviePatientEtabComponent {
  listePatients: any;
  medecin_Connecter!: Medecin;


  constructor(private shared: PatientService,private service: EtablissementService ,private router:Router) {}
  ngOnInit(): void {
    const UserConnected_String = localStorage.getItem('MEDECIN');
   const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
   if (UserConnected) {
     this.medecin_Connecter = {
      idMedecin: UserConnected.idMedecin,
       user: UserConnected.user,
       disponible: UserConnected.disponible,
       specialite: UserConnected.specialite,
       nom: UserConnected.nom,
       prenom: UserConnected.prenom,
       mail: UserConnected.mail,
       x: UserConnected.x,
       y: UserConnected.y,
       adresse: UserConnected.adresse,




   
     }
     console.log(this.medecin_Connecter.idMedecin);

   }
   this.listePatient()

}
listePatient() {
  this.service.getPatientsByEtab(this.medecin_Connecter.idMedecin)
    .subscribe(
      (res: any[]) => { 
        console.log(res);
        this.listePatients = res.filter((patient: any) => patient.medecin.idMedecin === this.medecin_Connecter.idMedecin);
      },
      err => {
        console.log(err);
      }
    );
}


MoveToUpdate(Patient:any){
  this.shared.SetPatient(Patient);
  console.log(Patient);
  console.log("i have Set it ");

  
}
}
