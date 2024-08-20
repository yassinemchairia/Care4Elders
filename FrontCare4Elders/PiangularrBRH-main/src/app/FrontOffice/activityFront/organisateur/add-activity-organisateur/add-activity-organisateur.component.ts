import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Organisateur } from 'src/app/FrontOffice/models/Organisateur';
import { ActivityService } from 'src/app/services/activity.service';
import { catchError, throwError } from 'rxjs';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';

@Component({
  selector: 'app-add-activity-organisateur',
  templateUrl: './add-activity-organisateur.component.html',
  styleUrls: ['./add-activity-organisateur.component.css']
})
export class AddActivityOrganisateurComponent implements OnInit {
  organisateur_Connecter!: Organisateur;
   // Identifiant statique de l'organisateur (à remplacer par l'identifiant souhaité)
  selectedImageFile: File | undefined;
  imageURL: string | undefined;
  orga:any
  
  constructor(private toast: NgToastService,private service:ActivityService,private srvc: BrahmiUploadService ,private router:Router,) {}
  
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

    
   }
  



  activity = {
    nomActivity: '',
    dateActivity: new Date(), // Date de début initialisée à la date actuelle
    image:'',   // Date de fin initialisée à la date actuelle
    typeActivity: ''         // Type de congé (à compléter)
  };
  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }
  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.srvc.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.activity.image  = response.imageURL;
           
            callback();
          } else {
            console.error('Error: Image URL not found in response.');
            callback();
          }
        },
        error => {
          console.error('Error uploading image:', error);
          callback();
        }
      );
    } else {
      console.error('No image selected');
      callback();
    }
  }
 
  showMessage(): void {
    this.toast.success({detail:"SUCCESS",summary:'Counger ajouté avec succéé',sticky:true});
  }

  ajouterActivite() {
    this.ajouterImage(() => {

    this.service.registerOrganisateurToActivity(this.activity,this.organisateur_Connecter.idOrganisateur)
    //  .pipe(catchError((error:any)=>{console.log(error);
    //   return throwError("blablabla:::::::::")
    // }))   this.cuisinier_Connecter.idC
  //   .pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.log('errrrrreur',error)

  //      //   if (error.status === 400 ) {
  //        //     return throwError('Date occupée');
  //       //  } else if (error.status === 404) {
  //        //     return throwError('Date non trouvée');
  //        // }
  //         return throwError('Erreur inconnue');
  //     })
  // )
  
    .subscribe(
      
      (res: any) => {
        console.log("(;;;;;;;;;;;;;;;;;;)")
        // Réinitialisation du congé après l'ajout
        this.activity = {
          nomActivity: '',
          dateActivity: new Date(), // Date de début initialisée à la date actuelle
          image:'',   // Date de fin initialisée à la date actuelle
          typeActivity: ''         // Type de congé (à compléter)
        };
  
        // Vérification de la structure de la réponse
        if (res.message) {
          const message = res.message;
          // Affichage de la notification de succès
          this.toast.success({ detail: message, summary: 'Activité ajouté avec succès', sticky: true });
          this.router.navigate(['/listOrgaActivities']);
        } else {
          // Si la structure de la réponse est incorrecte, affichez une erreur
          this.toast.error({ detail: 'Réponse invalide du serveur', summary: 'Erreur', sticky: true });
        }
      },
      (error:HttpErrorResponse) => {
        this.router.navigate(['/listOrgaActivities']);

        // console.log(error+"//MAD/")
        // if ( error.message) {
        //   const errorMessage = error.message;
        //   this.toast.error({ detail: errorMessage, summary: 'Erreur', sticky: true });
        // } else {
        //   this.toast.error({ detail: 'Une erreur est survenue lors de la demande d organisation.', summary: 'Erreur', sticky: true });
        // }
      });
    });
  }



}
