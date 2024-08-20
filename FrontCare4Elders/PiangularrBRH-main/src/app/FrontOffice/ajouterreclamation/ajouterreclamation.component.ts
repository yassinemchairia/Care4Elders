import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { Reclamation } from 'src/app/FrontOffice/Reclamation.interface';

@Component({
  selector: 'app-ajouterreclamation',
  templateUrl: './ajouterreclamation.component.html',
  styleUrls: ['./ajouterreclamation.component.css']
})
export class AjouterreclamationComponent implements OnInit {

  reclamationsWithResponses: { [key: string]: { reclamation: Reclamation, contenu: string, dateReponse: string } } = {};
  reclamationForm!: FormGroup;
  showForm = false;
  successMessage = '';
  errorMessage = '';
  tentativesRestantes = 3;
  userId:any;
  constructor(public reclamationService: ReclamationService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const Usercc_String = localStorage.getItem('USER_ID');
    this.userId=Usercc_String? Number(  JSON.parse(Usercc_String )): null;
    this.reclamationForm = this.formBuilder.group({
      description: ['', Validators.required],
      typeReclamation: ['', Validators.required]
    });

   
    this.reclamationService.getReclamationsByUserId(this.userId).subscribe(
      (data) => {
        this.reclamationsWithResponses = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors du chargement des réclamations:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.reclamationForm.valid) {
      const reclamationData = this.reclamationForm.value;
      const userId = 1;

      if (this.tentativesRestantes > 0) {
        this.reclamationService.ajouterReclamation(userId, reclamationData).subscribe(
          (data) => {
            this.reclamationsWithResponses = { ...this.reclamationsWithResponses, ...data };
            this.reclamationForm.reset();
            this.showForm = false;
            this.successMessage = 'Réclamation ajoutée avec succès.tu seras notifier lors de la récuperation de la reclamation ';
            this.errorMessage = '';
          },
          (error) => {
            if (error.status === 403) {
              this.tentativesRestantes = 0; // Mettre à jour tentativesRestantes
              this.errorMessage = 'Vous avez dépassé le nombre maximal de tentatives pour ajouter une réclamation contenant des gros mots.';
              this.showForm = false; // Fermer le formulaire
            }
          }
        );
      } else {
        this.errorMessage = 'Vous avez dépassé le nombre maximal de tentatives pour ajouter une réclamation contenant des gros mots.';
      }
    }
  }
}
