import { Component } from '@angular/core';
import { Patient } from 'src/app/FrontOffice/models/Patient';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-list-favori-patient',
  templateUrl: './list-favori-patient.component.html',
  styleUrls: ['./list-favori-patient.component.css']
})
export class ListFavoriPatientComponent {
  favoriteActivities: any[] = [];
  errorMessage: string = '';
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
    this.activityService.getActivitiesFavorisByPatientId(this.patient_Connecter.idpatient).subscribe(
      (activities: any[]) => {
        this.favoriteActivities = activities;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des activités favorites.';
        console.error('Error fetching favorite activities:', error);
      }
    );
  }
}
