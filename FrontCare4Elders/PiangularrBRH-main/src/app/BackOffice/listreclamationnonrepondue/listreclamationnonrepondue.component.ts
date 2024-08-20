import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listreclamationnonrepondue',
  templateUrl: './listreclamationnonrepondue.component.html',
  styleUrls: ['./listreclamationnonrepondue.component.css']
})
export class ListreclamationnonrepondueComponent implements OnInit {
  reclamationsNonRepondues: any[] = [];
  reclamations: any[] = [];
  typesReclamation: string[] = [];
  selectedType: string = '';
  
  constructor(private reclamationService: ReclamationService,private router: Router) {}

  ngOnInit() {
    this.getReclamationsNonRepondues();
   
  }
 
  
  
  checkReclamationStates() {
    // Parcourir les réclamations pour vérifier l'état
    this.reclamations.forEach(reclamation => {
      this.reclamationService.checkReclamationAnswered(reclamation.idReclamation).subscribe(
        (res) => {
          reclamation.resolue = res; // Ajouter la propriété resolue à chaque réclamation
        },
        (error) => {
          console.error('Erreur lors de la vérification de l\'état de la réclamation : ', error);
        }
      );
    });
  }
  onRepondre(idReclamation: number) {
    // Ouvrir le composant AjouterReponseReclamationComponent avec l'id de la réclamation
    this.router.navigate(['admin/reponsereclamation1', idReclamation]);
    // Vous pouvez ici ouvrir le composant AjouterReponseReclamationComponent ou effectuer l'action nécessaire
  }

  getReclamationsNonRepondues() {
    this.reclamationService.verifierReclamationsNonReponduesDepuisDeuxJours().subscribe(
      (response) => {
        this.reclamationsNonRepondues = response.reclamationsNonRepondues;
      },
      (error) => {
        console.error('Erreur lors de la récupération des réclamations non répondues : ', error);
      }
    );
  }
  showReclamationsNonRepondues() {
    this.reclamations = this.reclamationsNonRepondues;
  }
}
