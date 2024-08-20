import { Component } from '@angular/core';
import { Organisateur } from 'src/app/FrontOffice/models/Organisateur';
import { Patient } from 'src/app/FrontOffice/models/Patient';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-your-activity-patient',
  templateUrl: './your-activity-patient.component.html',
  styleUrls: ['./your-activity-patient.component.css']
})
export class YourActivityPatientComponent {
  activities: any[] = []; // Définir le tableau d'activités
  patient_Connecter!: Patient;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    const UserConnected_String = localStorage.getItem('Patient');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    console.log(UserConnected)
    if (UserConnected) {
      this.patient_Connecter = {
        idpatient: UserConnected.idpatient,
        user: UserConnected.user,
        typePatient: UserConnected.typePatient,
        dateDeNaissance: UserConnected.dateDeNaissance,
        archiver: UserConnected.archiver,
        poid: UserConnected.poid,
        longueur: UserConnected.longueur,
        sexe: UserConnected.sexe,
        nom: UserConnected.nom,
        prenom: UserConnected.prenom,
        mail: UserConnected.mail,
        x: UserConnected.x,
        y: UserConnected.y,
        adresse: UserConnected.adresse,

      }
  }
    this.loadActivitiesForPatient();
    
  }

  loadActivitiesForPatient(): void {
    this.activityService.getActivitiesForPatient(this.patient_Connecter.idpatient).subscribe(
      (data) => {
        this.activities = data;

        console.log('Activités de l\'organisateur:', this.activities);
      },
      (error) => {
        console.error('Erreur lors du chargement des activités de l\'organisateur:', error);
      }
    );
  }

  
  
}
