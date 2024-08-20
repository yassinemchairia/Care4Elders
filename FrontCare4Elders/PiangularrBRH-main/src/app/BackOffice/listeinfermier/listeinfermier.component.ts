import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { InfermierService } from 'src/app/services/infermier.service';

@Component({
  selector: 'app-listeinfermier',
  templateUrl: './listeinfermier.component.html',
  styleUrls: ['./listeinfermier.component.css']
})
export class ListeinfermierComponent implements OnInit {
  listeInfermiers: any[] = [];
  listeEtablissements: any[] = [];
  constructor(
    private shared: InfermierService,
    private etabService: EtablissementService,
    private router: Router
 ) {}
 ngOnInit(): void {
  this.listeInfermier();
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
listeInfermier(): void {
  this.shared.listeInfermier().subscribe(
    res => {
      console.log(res);
      this.listeInfermiers = res;
    },
    err => {
      console.log(err);
    }
  );
}
delete(id: number): void {
  console.log("Deleting with ID:", id);
  this.shared.supprimerInfermier(id).subscribe(
    res => {
      console.log(res);
      this.rechargerPage();
    },
    err => {
      console.log(err);
    }
  );
}
affecterInfermierToEtab(idInfermier: number, selectedEtab: number): void {
  if (selectedEtab) {
    this.shared.affecterInfermierATablissement(idInfermier, selectedEtab).subscribe(
      res => {
        console.log("infermier affecté à l'établissement:", res);
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
desactiverInfermier(idInfermier: number): void {
  this.shared.desaffecterInfermiertablissement(idInfermier).subscribe(
      res => {
          console.log("Infermier désaffecté de l'établissement:", res);
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
