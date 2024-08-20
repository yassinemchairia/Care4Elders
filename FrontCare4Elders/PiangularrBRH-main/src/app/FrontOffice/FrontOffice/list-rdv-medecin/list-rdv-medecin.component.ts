import { Component, OnInit } from '@angular/core';
import { AjouteraffAmbulanceService } from 'src/app/services/ajouteraff-ambulance.service';
import { MedecinService } from 'src/app/services/medecin.service';
import { PatientService } from 'src/app/services/patient.service';
import { RdvService } from 'src/app/services/rdv.service';
import { Medecin } from '../../models/Medecin';

@Component({
  selector: 'app-list-rdv-medecin',
  templateUrl: './list-rdv-medecin.component.html',
  styleUrls: ['./list-rdv-medecin.component.css']
})
export class ListRdvMedecinComponent implements OnInit{
 // ListRdvs: any;
  isAssignedToAmbulance: boolean = false;
  ListRdvs: any[] = []; // Supposons que vous avez une liste de rendez-vous
  medecin_Connecter!: Medecin;


  constructor(private service: MedecinService,private srv:RdvService,private patientService:PatientService,private ajouteraffAmbulanceService: AjouteraffAmbulanceService){
  }
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

    this.service.getRdvMedecin(this.medecin_Connecter.idMedecin).subscribe(e=>{
      console.log(e);
      this.ListRdvs=e;
    }
    );
  }
  printPdf(patientId: number) {
    if (patientId) {
      this.srv.downloadPdf(patientId).subscribe((pdfBlob: Blob) => {
        const url = window.URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'fiche_patient.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
    } else {
      console.error('ID du patient non disponible.');
    }
  }
  
downloadExcel(idMedecin: number, fileName: string) {
  this.srv.exportRdvsToExcel(idMedecin, fileName).subscribe(
    () => {
      console.log('Le fichier Excel a été généré avec succès.');
    },
    error => {
      console.error('Erreur lors de la génération du fichier Excel :', error);
    }
  );
}

// assignToAmbulance(patientId: number, idAmb: number) {
  
//   if (patientId) {
//     this.patientService.retrieveAmbulanceById;
//     this.patientService.assignerPatientAmbulance(patientId, idAmb).subscribe(
//       (result: any) => {
//         console.log('Patient assigné à une ambulance avec succès :', result);
//       },
//       error => {
//         console.error('Erreur lors de l\'assignation du patient à une ambulance :', error);
//       }
//     );
//   } else {
//     console.error('ID du patient non disponible.');
//   }
// }
// assignToAmbulance(patientId: number) {
//   if (patientId) {
//     this.patientService.retrieveAmbulanceById().subscribe(
//       (idAmbulance: number) => {
//         this.patientService.assignerPatientAmbulance(patientId, idAmbulance).subscribe(
//           (result: any) => {
//             console.log('Patient assigné à une ambulance avec succès :', result);
//             this.isAssignedToAmbulance = true;

//           },
//           error => {
//             console.error('Erreur lors de l\'assignation du patient à une ambulance :', error);
//           }
//         );
//       },
//       error => {
//         console.error('Erreur lors de la récupération de l\'ID de l\'ambulance :', error);
//       }
//     );
//   } else {
//     console.error('ID du patient non disponible.');
//   }

// }
assignToAmbulance(patientId: number, rdv: any) {
  if (patientId) {
    this.patientService.retrieveAmbulanceById(patientId).subscribe(
      (idAmbulance: number) => {
        this.patientService.assignerPatientAmbulance(patientId, idAmbulance).subscribe(
          (result: any) => {
            console.log('Patient assigné à une ambulance avec succès :', result);
            rdv.isAssignedToAmbulance = true; // Définir la propriété isAssignedToAmbulance pour ce rendez-vous
          },
          error => {
            console.error('Erreur lors de l\'assignation du patient à une ambulance :', error);
          }
        );
      },
      error => {
        console.error('Erreur lors de la récupération de l\'ID de l\'ambulance :', error);
      }
    );
  } else {
    console.error('ID du patient non disponible.');
  }
}
}
