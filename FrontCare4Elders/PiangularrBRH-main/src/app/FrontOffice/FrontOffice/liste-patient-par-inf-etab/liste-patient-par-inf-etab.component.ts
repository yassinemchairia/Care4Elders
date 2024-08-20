import { Component, OnInit } from '@angular/core';
import { InfermierService } from 'src/app/services/infermier.service';
import { PatientService } from 'src/app/services/patient.service';
import { Infermier } from '../../models/Infermier';

@Component({
  selector: 'app-liste-patient-par-inf-etab',
  templateUrl: './liste-patient-par-inf-etab.component.html',
  styleUrls: ['./liste-patient-par-inf-etab.component.css']
})
// export class ListePatientParInfEtabComponent implements OnInit{
//   ListPatientsInfEtab: any[] = []; 
//   lastAppointmentDate!: Date;

//   constructor(private service: InfermierService,private srvc:PatientService){
//   }
//   ngOnInit(): void {
//     let id = 2;
//     this.service.trouverPatientsParInfermier(id).subscribe(e=>{
//       console.log(e);
//       this.ListPatientsInfEtab=e;
//     }
//     );
// }
// SelectDate(idPatient: number) {
//   this.srvc.retrieveDateLastRdv(idPatient).subscribe(
//     (date: Date) => {
//       this.lastAppointmentDate = date;
//       console.log('date select.');
//     },
//     error => {
//       console.error('Erreur lors de la génération du fichier Excel :', error);
//     }
//   );
// }

export class ListePatientParInfEtabComponent implements OnInit {
  ListPatientsInfEtab: any[] = [];
  lastAppointmentDates: { [key: number]: Date } = {}; // Pour stocker les dates des derniers rendez-vous
  infermier_Connecter!: Infermier;

  constructor(private service: InfermierService, private srvc: PatientService) {}
 
  ngOnInit(): void {
    const UserConnected_String = localStorage.getItem('INFERMIER');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    if (UserConnected) {
      this.infermier_Connecter = {
        idInfermier: UserConnected.idInfermier,
        disponiblenf: UserConnected.disponiblenf,
        user: UserConnected.user,
        nom: UserConnected.nom,
        prenom: UserConnected.prenom,
        mail: UserConnected.mail,
      
 
 
    
      }
      console.log(this.infermier_Connecter.idInfermier);
 
    }
 



     this.service.trouverPatientsParInfermier(this.infermier_Connecter.idInfermier).subscribe(e => {
       console.log(e);
       this.ListPatientsInfEtab = e;
       // Appeler SelectDate pour chaque patient après avoir récupéré la liste
       this.ListPatientsInfEtab.forEach(patient => {
         this.SelectDate(patient.idpatient);
       });
     });
  }
 
  SelectDate(idPatient: number) {
     this.srvc.retrieveDateLastRdv(idPatient).subscribe(
       (date: Date) => {
         this.lastAppointmentDates[idPatient] = date; // Stocker la date pour le patient spécifique
         console.log('Date sélectionnée pour le patient', idPatient, ':', date);
       },
       error => {
         console.error('Erreur lors de la récupération de la date :', error);
       }
     );
  }
 }
 

