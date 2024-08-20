import { Component } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajouterreponsereclamationretard',
  templateUrl: './ajouterreponsereclamationretard.component.html',
  styleUrls: ['./ajouterreponsereclamationretard.component.css']
})
export class AjouterreponsereclamationretardComponent {

  idReclamation: number;
  reponse: any = {}; // Initialiser la réponse vide

  constructor(private reclamationService: ReclamationService, private route: ActivatedRoute,  private router: Router) {
    // Récupérer l'id de la réclamation depuis les paramètres de l'URL
    this.idReclamation = this.route.snapshot.params['idReclamation'];
  }

 
  ajouterReponse1() {
    // Appeler la fonction pour ajouter la réponse à la réclamation
    this.reclamationService.ajouterReponseAReclamation(this.idReclamation, this.reponse).subscribe(
      (response) => {
        console.log('Réponse ajoutée avec succès : ', response);
        
        this.router.navigate(['admin/listreclamationnonrepondue']);
        // Vous pouvez ajouter ici une logique pour afficher un message de succès ou rediriger l'utilisateur, etc.
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la réponse : ', error);
        // Gérer l'erreur ici, afficher un message à l'utilisateur, etc.
      }
    );
  }
}
