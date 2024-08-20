import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-gestionreclamation',
  templateUrl: './gestionreclamation.component.html',
  styleUrls: ['./gestionreclamation.component.css']
})
export class GestionreclamationComponent implements OnInit {
  reclamations: any[] = [];
  typesReclamation: string[] = [];
  selectedType: string = '';
  totalReclamationsNonRepondues: number = 0; 
  topUsers: any[] = [];
  constructor(private reclamationService: ReclamationService,private router: Router) {}

  ngOnInit() {
    this.getAllReclamations();
    this.getAllTypesReclamation();
    this.getReclamationsNonReponduesTotal();
    this.getTopUsers();
    
  }

  getAllReclamations() {
    this.reclamationService.getAllReclamationsSortedByImportance().subscribe(
      (data) => {
        this.reclamations = data;
        this.checkReclamationStates();
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des réclamations triées par importance : ', error);
      }
    );
  }
  getReclamationsNonReponduesTotal() {
    this.reclamationService.verifierReclamationsNonReponduesDepuisDeuxJours().subscribe(
      (response) => {
        this.totalReclamationsNonRepondues = response.totalReclamationsNonRepondues;
      },
      (error) => {
        console.error('Erreur lors de la récupération du total des réclamations non répondues : ', error);
      }
    );
  }
  getAllTypesReclamation() {
    this.reclamationService.getAllTypesReclamation().subscribe(
      (data) => {
        this.typesReclamation = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des types de réclamation : ', error);
      }
    );
  }

  onChangeType() {
    const selectedType = this.selectedType;
    if (selectedType) {
      this.getReclamationsByType(selectedType);
    } else {
      this.getAllReclamations(); // Ajout de l'appel à getAllReclamations() lorsque selectedType est vide
    }
  }

  getReclamationsByType(type: string) {
    this.reclamationService.getReclamationsByType(type).subscribe(
      (data) => {
        this.reclamations = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des réclamations par type : ', error);
      }
    );
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
  showReclamationsNonRepondues() {
    this.router.navigate(['admin/listreclamationnonrepondue']);
  }
  onRepondre(idReclamation: number) {
    // Ouvrir le composant AjouterReponseReclamationComponent avec l'id de la réclamation
    this.router.navigate(['admin/reponsereclamation', idReclamation]);
    // Vous pouvez ici ouvrir le composant AjouterReponseReclamationComponent ou effectuer l'action nécessaire
  }
  getTopUsers() {
    this.reclamationService.getAllReclamationsdetopusers().subscribe(
      (data) => {
        this.topUsers = data;
      },
      (error) => {
        console.error('Error retrieving top users:', error);
      }
    );
  }
}
