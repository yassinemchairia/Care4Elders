import { Component } from '@angular/core';
import { Medecin } from '../../models/Medecin';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { OrdenanceService } from 'src/app/services/ordenance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ordenance',
  templateUrl: './list-ordenance.component.html',
  styleUrls: ['./list-ordenance.component.css']
})
export class ListOrdenanceComponent {
  searchText: string = '';
  page: number = 1; // Page actuelle
  pageSize: number = 3;
  ordenances: any;
  medecin_Connecter!: Medecin;
  constructor(private dialog: MatDialog,private toast: NgToastService, private shared: OrdenanceService, private router: Router) { }


  ngOnInit(): void {
    // this.initWebSocket();
    
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
      }
      console.log(this.medecin_Connecter.idMedecin);
    }
    this.shared.listeOrdenances().subscribe(
      res => {
        console.log(res);
        this.ordenances = res;
      },
      error => {
        console.log('Erreur survenue :', error);
      }
    );
    
    console.log(this.ordenances,"//////////////")

  }
  deleteM(id: number) {
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette aide ?");
    
    if (confirmation) {
      console.log("Deleting aide with ID:", id);
      this.shared.supprimerOrdenance(id)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
          },
          err => {
            console.log(err);
          }
        );
    }
  }
  

  buttonAjouter() {
    this.router.navigate(['/AjouterOrd']);
  }

  buttonModifier(id: any) {
    this.router.navigate(['modifierOrd/' + id]);
  }

}
