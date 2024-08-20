import { Component } from '@angular/core';
import { Patient } from 'src/app/FrontOffice/models/Patient';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-list-activity-patient',
  templateUrl: './list-activity-patient.component.html',
  styleUrls: ['./list-activity-patient.component.css']
})
export class ListActivityPatientComponent {
  activities: any[] = []; // Définir le tableau d'activités
   patient_Connecter!: Patient;
   favoriteActivities: any[] = [];
   constructor(private activityService: ActivityService) { }
  ngOnInit(): void {
    // Appeler la méthode pour récupérer les activités avec l'état "accepté"
    this.getAcceptedActivities();
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
  }
  getAcceptedActivities(): void {
    this.activityService.getActivitiesByEtat("ACCEPTE")
      .subscribe(
        (data: any[]) => {
          this.activities = data; // Stocker les activités récupérées dans le tableau
          console.log('Activities with state "accepté":', this.activities);
        },
        (error) => {
          console.log('Error fetching activities:', error);
        }
      );
  }

  registerPatientToActivity(idActivity: number): void {
    this.activityService.registerPatientToEvent(idActivity, this.patient_Connecter.idpatient)
      .subscribe(
        (response) => {
          console.log('Inscription réussie:', response);
          // Mettre à jour les activités après l'inscription réussie si nécessaire
          // Par exemple, recharger les activités pour refléter les changements
          this.getAcceptedActivities();
          alert("Votre demande a été bien prise en compte, un Email de confirmation vous a été envoyé.");

        },
        error => {
          console.log('Erreur:', error); // Affiche l'objet d'erreur complet dans la console
          if (error.status === 400) {
            console.log('////////', error.error);
            alert(error.error);
          } else {
            alert("Felecitation, Vous avze ete inscrit a cette activite , un email vous a ete envoyé");
          }
        }
      );
  }



  

  loadFavoriteActivities(): void {
    this.activityService.getActivitiesFavorisByPatientId(this.patient_Connecter.idpatient).subscribe(
      (data: any[]) => {
        this.favoriteActivities = data;
      },
      (error) => {
        console.log('Error fetching favorite activities:', error);
      }
    );
  }

  toggleFavorite(activity: any): void {
    if (this.isFavorite(activity.idActivity)) {
      // L'activité est déjà un favori, la supprimer des favoris
      this.removeFromFavorites(activity);
    } else {
      // L'activité n'est pas un favori, l'ajouter aux favoris
      this.addToFavorites(activity);
    }
  }
  
  addToFavorites(activity: any): void {
    this.activityService.addActivityToFavoris(this.patient_Connecter.idpatient, activity.idActivity)
      .subscribe(
        (response) => {
          console.log('Activité ajoutée aux favoris:', response);
          activity.favorite = true; // Mettre à jour l'état de l'activité
        },
        error => {
          console.log('Erreur:', error); // Affiche l'objet d'erreur complet dans la console
          if (error.status === 400) {
            console.log('////////', error.error);
            alert(error.error);
          } else {
            alert("Quelque chose s'est mal passé");
          }
        }
      );
  }
  
  removeFromFavorites(activity: any): void {
    this.activityService.removeActivityFromFavoris(this.patient_Connecter.idpatient, activity.idActivity)
      .subscribe(
        (response) => {
          console.log('Activité retirée des favoris:', response);
          activity.favorite = false; // Mettre à jour l'état de l'activité
        },
        error => {
          console.log('Erreur:', error); // Affiche l'objet d'erreur complet dans la console
          if (error.status === 400) {
            console.log('////////', error.error);
            alert(error.error);
          } else {
            alert("Quelque chose s'est mal passé");
          }
        }
      );
  }
  
  isFavorite(activityId: number): boolean {
    return this.activities.find((activity) => activity.idActivity === activityId)?.favorite ?? false;
  }

  reactToActivity(activityId: number, reactionType: string): void {
    const formattedReactionType = reactionType.toUpperCase();

    this.activityService.reactToActivity(activityId, this.patient_Connecter.idpatient, formattedReactionType).subscribe(
      (response) => {
        console.log('Réaction enregistrée avec succès:', response);
        this.getAcceptedActivities(); // Rafraîchir les activités après la réaction
      },
      error => {
        console.log('Erreur:', error); // Affiche l'objet d'erreur complet dans la console
        if (error.status === 400) {
          console.log('////////', error.error);
          alert(error.error);
        } else {
          alert("Quelque chose s'est mal passé");
        }
      }
    );
  }
  isLiked(activityId: number): boolean {
    const activity = this.activities.find((activity) => activity.idActivity === activityId);
    return activity?.reactionType === 'LIKE';
  }
  isDisliked(activityId: number): boolean {
    const activity = this.activities.find((activity) => activity.idActivity === activityId);
    return activity?.reactionType === 'DISLIKE';
  }
}
