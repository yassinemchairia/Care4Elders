import { Component, OnInit } from '@angular/core';
import { Medecin } from '../../models/Medecin';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { OrdenanceService } from 'src/app/services/ordenance.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { MedicamentService } from 'src/app/services/medicament.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-ajouter-ordenance',
  templateUrl: './ajouter-ordenance.component.html',
  styleUrls: ['./ajouter-ordenance.component.css'],
  animations: [
    trigger('inputHighlight', [
      state('focused', style({
        backgroundColor: '#e1f5fe',
        transform: 'scale(1.05)'
      })),
      state('unfocused', style({
        backgroundColor: '#fff',
        transform: 'scale(1)'
      })),
      transition('unfocused <=> focused', animate('300ms ease-in-out'))
    ])
  ]
  
})
//npm install jspdf jspdf-autotable
export class AjouterOrdenanceComponent implements OnInit {
  focused = false;
  selectedPatientId: number | null = null;

  patients: any[] = [];
  medecin_Connecter!: Medecin;
  allMedicaments: any[]=[]; // Array to store all medicaments
  selectedMedicaments: any[] = []; 
  mdicIds: any[] = []; 
  constructor(
    private dialog: MatDialog,
    private toast: NgToastService,
    private ordenanceService: OrdenanceService,
    private router: Router,
    private medicamentService:MedicamentService
  ) {}

  ngOnInit(): void {
    this.retrieveMedecinDetails();
    this.ordenanceService.listePatients().subscribe(res => {
      this.patients = res;
      console.log(res)
    });  
    this.medicamentService.listeMedicament().subscribe((data) => {
      this.allMedicaments = data;
      console.log(data)

    });
  }
  toggleSelection(event: any, medicament: any) {
    if (event.target.checked) {
      // Add selected medicament to the array if checked
      this.selectedMedicaments.push(medicament.idMedicament);
      console.log("toggleSelection",medicament)
    } else {
      // Remove selected medicament from the array if unchecked
      const index = this.selectedMedicaments.indexOf(medicament.idMedicament);
      if (index !== -1) {
        this.selectedMedicaments.splice(index, 1);
      }
    }
  }

  removeMedicament(medicament: any) {
    // Find the index of the selected medicament in the array
    const index = this.selectedMedicaments.indexOf(medicament);
    if (index !== -1) {
      // Remove the selected medicament using splice
      this.selectedMedicaments.splice(index, 1);
    }
  }
  retrieveMedecinDetails() {
    const UserConnected_String = localStorage.getItem('MEDECIN');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    if (UserConnected) {
      this.medecin_Connecter = {
        idMedecin: UserConnected.idMedecin,
        user: UserConnected.user,
        disponible: UserConnected.disponible,
        specialite: UserConnected.specialite,
        nom: UserConnected.nom,
        prenom: UserConnected.prenom,
        mail: UserConnected.mail,
        adresse: UserConnected.adresse,
        x: UserConnected.x,
        y: UserConnected.y,



      };
    }
  }

  ordenance = {
    titre: '',
    instructions: '',
    dosage: 0,
    frequence: 0,
    duree: 0,
  };

  ajouterOrdenance() {
    // Dans la méthode ajouterOrdennance() ou où vous en avez besoin
    console.log(this.selectedMedicaments,"//////////////////MEdicament")

    // Assurez-vous que selectedPatientId est correctement défini et non null
    // console.log(this.selectedMedicaments,"//////////////////MEdicament")
    if (this.selectedPatientId) {
       const ordonnanceData = {
         ...this.ordenance,
         patient: this.selectedPatientId ,
         mdicamentsIds: this.selectedMedicaments.map(medicament => medicament.idMedicament)

       };
   
       this.ordenanceService.ajouterOrdenance(ordonnanceData, this.medecin_Connecter.idMedecin)
         .subscribe(
           res => {
             this.router.navigate(['/affOrd']);
           },
           (error: HttpErrorResponse) => {
             console.error(error.error);
             // Ajoutez une gestion d'erreur appropriée ici
           }
         );
    } else {
       // Gérer le cas où aucun patient n'est sélectionné
       console.error('Aucun patient sélectionné');
       // Ajoutez une gestion d'erreur appropriée ici
    }
   }
   

  generatePDF() {
    const doc = new jsPDF();
  
    doc.setFontSize(16);
    doc.text('Ordonnance', 10, 10);
    doc.setFontSize(12);
    doc.text('Titre: ' + this.ordenance.titre, 10, 20);
    doc.text('Instructions: ' + this.ordenance.instructions, 10, 30);
    doc.text('Dosage: ' + this.ordenance.dosage + 'mg', 10, 40);
    doc.text('Fréquence: ' + this.ordenance.frequence + ' times per day', 10, 50);
    doc.text('Durée: ' + this.ordenance.duree + ' days', 10, 60);
  
    doc.save('Ordonnance.pdf');
  }
}
