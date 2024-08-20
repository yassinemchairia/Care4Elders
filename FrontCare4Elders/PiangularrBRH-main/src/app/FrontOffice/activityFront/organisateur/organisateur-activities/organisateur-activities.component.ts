import { Component, OnInit } from '@angular/core';
import { Organisateur } from 'src/app/FrontOffice/models/Organisateur';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-organisateur-activities',
  templateUrl: './organisateur-activities.component.html',
  styleUrls: ['./organisateur-activities.component.css']
})
export class OrganisateurActivitiesComponent implements OnInit {
  organisateur_Connecter!: Organisateur;
  activities: any[] = [];
  filteredActivities: any[] = [];
  selectedState: string = 'Tous'; 
  orga:any

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    const UserConnected_String = localStorage.getItem('ORGANISATEUR');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
     console.log(UserConnected)
     if (UserConnected) {
      this.organisateur_Connecter = {
        idOrganisateur: UserConnected.idOrganisateur,
         user: UserConnected.user,
        
     }
     
       console.log(this.organisateur_Connecter.idOrganisateur);
     }
    this.loadActivitiesForOrganisateur();
    this.activityService.getOrga(this.organisateur_Connecter.idOrganisateur)
    .subscribe(
      res => {
        console.log(res);
        console.log("///////////////////////////////////////");
        this.orga = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  loadActivitiesForOrganisateur(): void {
    this.activityService.getActivitiesForOrganisateur(this.organisateur_Connecter.idOrganisateur).subscribe(
      (data) => {
        this.activities = data;
        this.filteredActivities = data; // Initialise le tableau filtré avec toutes les activités

        console.log('Activités de l\'organisateur:', this.activities);
      },
      (error) => {
        console.error('Erreur lors du chargement des activités de l\'organisateur:', error);
      }
    );
  }

  
  filterActivitiesByState() {
    if (this.selectedState === 'Tous') {
      this.filteredActivities = this.activities; // Afficher toutes les activités
    } else {
      this.filteredActivities = this.activities.filter(activity => activity.etat === this.selectedState);
    }
  }
}
