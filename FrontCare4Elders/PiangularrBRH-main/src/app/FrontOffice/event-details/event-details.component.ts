import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvennementService } from 'src/app/serives/eventsService/evennement.service';
import { GeocodingService } from '../../serives/eventsService/geocoding.service';
import { NgToastService } from 'ng-angular-popup';
import { CommentsService } from '../comments/comments.service';
import { Commantaire } from '../comments/comment.model';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventId: any;
  eventDetails: any;
  placeName: string = '';
  errorMessage: string = '';
  userId: any;
  comments: Commantaire[] = []; // Initialisez comments comme un tableau vide
localStorage: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentsService: CommentsService,
    private evennementService: EvennementService,
    private geocodingService: GeocodingService,
    private toast: NgToastService
  ) { }


    
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        // Retrieve the ID from the route parameters
        // methode pour recupere le id mil route il fou9ani 
        this.eventId = params.get('id');
        this.loadEventDetails();
         this.loadComments();
        // You can then use this.id as needed
      });
      //hekka recuperete il id ta3 user 
      const UserConnected_String = localStorage.getItem('USER_ID');
       this.userId = UserConnected_String ? Number(JSON.parse(UserConnected_String)) : null;
       this.loadEventDetails()
   
   }
  
      

  loadEventDetails() {
    this.evennementService.getEvennementById(this.eventId).subscribe(
      (res: any) => {
        console.log(this.eventDetails)
        this.eventDetails = res;
        this.getPlaceName(this.eventDetails.lat, this.eventDetails.lng);
        console.log(this.eventDetails.lat, this.eventDetails.lng)
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getPlaceName(latitude: number, longitude: number): void {
    this.geocodingService.getPlaceName(latitude, longitude).subscribe(
      (data: any) => {
        if (data && data.display_name) {
          this.placeName = data.display_name;
        } else {
          this.placeName = 'Nom de la place non disponible';
        }
      },
      err => {
        console.log('Erreur lors de la récupération du nom de la place:', err);
        this.placeName = 'Erreur lors de la récupération du nom de la place';
      }
    );
  }
  
  participer(): void {
    console.log(this.eventDetails);

    if (this.eventDetails.users && this.eventDetails.users.some((user: any) => user.id === this.userId)) {
      alert("Vous avez déjà participé à cet événement.");
    }else{
      this.evennementService.registerUserToEvent(this.eventId, this.userId).pipe(
        tap((response: any) => {
          if(response.body){
            alert("Vous avez été inscrit avec succès à l'événement. Merci");
            // Rediriger l'utilisateur vers une autre page ou recharger la page actuelle
            this.router.navigate(['/afficherevennementfront']);
          }
        }),
        catchError((error: any) => {
          // Handle the error here
          console.error('An error occurred:', error);
          // Optionally, you can show an alert or perform other actions to notify the user
          alert("Une erreur s'est produite lors de l'inscription à l'événement. Veuillez réessayer plus tard.");
          // Return an observable to recover from the error (e.g., empty observable or re-throwing the error)
          return throwError(error);
        })
      ).subscribe();
    }      

    /*const eventId = Number(this.eventId);
    if (this.userId && typeof this.userId === 'number' && eventId && typeof eventId === 'number') {
      this.evennementService.getEvennementById(eventId).subscribe(
        (eventDetails: any) => {
          // Vérifier si l'utilisateur est déjà inscrit
           else {
            this.evennementService.registerUserToEvent(eventId, this.userId).pipe(
              tap((response: string) => {
                if(response){
                  this.loadEventDetails();
                  alert("Vous avez été inscrit avec succès à l'événement. Merci");
                  console.log(response);
                  // Rediriger l'utilisateur vers une autre page ou recharger la page actuelle
                  this.router.navigate(['/afficherevennementfront']);
                }
              })).subscribe();
          }
        },
        error => {
          console.error("Erreur lors de la récupération des détails de l'événement:", error);
          alert("Erreur lors de la récupération des détails de l'événement. Veuillez réessayer plus tard.");
        }
      );
    } else {
      console.log("UserId ou EventId est undefined ou n'est pas un nombre");
      // Gérer le cas où userId ou eventId est undefined ou n'est pas un nombre
    }*/
  }
  

  loadComments(): void {
    this.evennementService.getCommentsForEvent(this.eventId).subscribe(
      comments => {
        this.comments = comments;
      },
      error => {
        console.error('Erreur lors du chargement des commentaires:', error);
        this.errorMessage = 'Erreur lors du chargement des commentaires. Veuillez réessayer plus tard.';
      }
    );
  }

  ajouterCommantaire() {
    const commantaireTextArea = document.getElementById("commentArea") as HTMLTextAreaElement;
    if(commantaireTextArea?.value){
        const commantaire : Commantaire = {
            contenu: commantaireTextArea?.value,
            date: new Date(),
      }
      this.commentsService.ajouterCommentaire(commantaire, this.eventId, this.userId)
      .subscribe( comment => {
        if(comment){
          commantaireTextArea.value = '';
          this.comments = [];
          this.loadComments();
        }
      },
      error => {
        console.error('Erreur lors de l ajout du commentaire:', error);
        this.errorMessage = 'Erreur lors du chargement des commentaires. Veuillez réessayer plus tard.';
      })
    }
  }

  deleteCommentaire(commentId: number) {
    // Récupérer l'ID de l'utilisateur connecté
    const UserConnected_String = localStorage.getItem('USER_ID');
  
    if (UserConnected_String) {
      // Appeler la méthode supprimerComment du service de commentaires avec les IDs nécessaires
      this.commentsService.deleteCommentaire(commentId).subscribe(
        () => {
          // Supprimer le commentaire supprimé de l'interface utilisateur
          //this.comments = this.comments.filter(comment => comment.id !== commentId);
          this.comments = [];
          this.loadComments();
          // Afficher éventuellement un message de réussite
        },
        error => {
          console.error('Erreur lors de la suppression du commentaire :', error);
          // Afficher éventuellement un message d'erreur
        }
      );
    } else {
      console.log("L'ID de l'utilisateur est indisponible.");
      // Gérer le cas où l'ID de l'utilisateur n'est pas disponible
    }
  }
  
  updateComment(comment: Commantaire) {
    const commentElement = document.getElementById(`comment[${comment.id}]`) as HTMLInputElement | null;
    if (commentElement?.value){
      const com : Commantaire = {
        id: comment.id,
        contenu: commentElement.value,
      }
      this.commentsService.modifierComment(com).subscribe(
        updatedComment => {
          // Update the comment in the UI with the updated data
          if(updatedComment){
            this.comments = [];
            this.loadComments();
          }
        },
        error => {
          console.error('Erreur lors de la modification du commentaire:', error);
          // Optionally show an error message
        }
      );
    }
  }
}