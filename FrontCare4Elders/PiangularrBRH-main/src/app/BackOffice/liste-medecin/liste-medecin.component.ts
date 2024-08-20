import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
 selector: 'app-liste-medecin',
 templateUrl: './liste-medecin.component.html',
 styleUrls: ['./liste-medecin.component.css']
})
export class ListeMedecinComponent implements OnInit {
 listeMedecins: any[] = [];
 listeEtablissements: any[] = [];

 constructor(
    private shared: MedecinService,
    private etabService: EtablissementService,
    private router: Router
 ) {}

 ngOnInit(): void {
    this.listeMedecin();
    this.listeEtablissement();
 }

 listeEtablissement(): void {
    this.etabService.listeEtablissement().subscribe(
      res => {
        console.log(res);
        this.listeEtablissements = res;
      },
      err => {
        console.log(err);
      }
    );
 }

 listeMedecin(): void {
    this.shared.listeMedecin().subscribe(
      res => {
        console.log(res);
        this.listeMedecins = res;
      },
      err => {
        console.log(err);
      }
    );
 }

 delete(id: number): void {
    console.log("Deleting with ID:", id);
    this.shared.supprimerMedecin(id).subscribe(
      res => {
        console.log(res);
        this.rechargerPage();
      },
      err => {
        console.log(err);
      }
    );
 }

 affecterMedecinToEtab(idMedecin: number, selectedEtab: number): void {
    if (selectedEtab) {
      this.shared.affecterMedecinToEtab(idMedecin, selectedEtab).subscribe(
        res => {
          console.log("Médecin affecté à l'établissement:", res);
          this.rechargerPage();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      console.log("Veuillez sélectionner un établissement.");
    }

 }

 desactiverMedecin(idMedecin: number): void {
  this.shared.desactfMedecinEtabliss(idMedecin).subscribe(
      res => {
          console.log("Médecin désaffecté de l'établissement:", res);
          this.rechargerPage();
      },
      err => {
          console.log(err);
      }
  );
}

 rechargerPage(): void {
  window.location.reload();
}
}
