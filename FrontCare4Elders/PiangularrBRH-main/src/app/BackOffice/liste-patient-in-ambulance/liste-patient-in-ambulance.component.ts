
import { Component } from '@angular/core';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-liste-patient-in-ambulance',
  templateUrl: './liste-patient-in-ambulance.component.html',
  styleUrls: ['./liste-patient-in-ambulance.component.css']
})
export class ListePatientInAmbulanceComponent {
  listePatientAmb: any;
  medecins: any[] = []; // Initialisation des tableaux
  infirmiers: any[] = [];
  selectedMedecinId: number | null = null; // Initialisation des valeurs null
  selectedInfirmierId: number | null = null;

  constructor(private shared: PatientService, private service: EtablissementService) {}

  ngOnInit(): void {
    this.getlistePatientAmb();
  }
   
  getlistePatientAmb() {
    this.shared.retrieveAllPatientInAmbulance()
       .subscribe(
         res => {
           console.log(res);
           this.listePatientAmb = res;
           if (this.listePatientAmb.length > 0) {
             this.onEtabChange(this.listePatientAmb[0].ambulance.etablissement.idEtab);
           }
         },
         err => {
           console.log(err);
         }
       );
  }

  onEtabChange(idEtab: number) {
    this.service.getMedecinsByEtab(idEtab).subscribe(
      medecins => {
        console.log(idEtab);
        this.medecins = medecins;
      },
      error => {
        console.error('Erreur lors de la récupération des médecins :', error);
      }
    );

    this.service.getInfirmiersByEtab(idEtab).subscribe(
      infirmiers => {
        this.infirmiers = infirmiers;
      },
      error => {
        console.error('Erreur lors de la récupération des infirmiers :', error);
      }
    );
  }

  onMedecinChange(event: any) {
    this.selectedMedecinId = event.target.value; // Mettre à jour selectedMedecinId lors de la sélection d'un médecin
  }

  onInfirmierChange(event: any) {
    this.selectedInfirmierId = event.target.value; // Mettre à jour selectedInfirmierId lors de la sélection d'un infirmier
  }

  onSubmit(idPatient: number, idEtab: number) {
    if (this.selectedMedecinId && this.selectedInfirmierId) {
      this.shared.unassignPatientAndAffectToEtab(idPatient, idEtab, this.selectedMedecinId, this.selectedInfirmierId)
        .subscribe(
          response => {
            console.log('Patient désassigné et affecté avec succès :', response);
            this.getlistePatientAmb(); // Réactualiser la liste des patients dans l'ambulance
            this.selectedMedecinId = null;
            this.selectedInfirmierId = null;
          },
          error => {
            console.error('Erreur lors de la désassignation et de l\'affectation du patient :', error);
          }
        );
    } else {
      console.error('Veuillez sélectionner un médecin et un infirmier.');
    }
  }
}
