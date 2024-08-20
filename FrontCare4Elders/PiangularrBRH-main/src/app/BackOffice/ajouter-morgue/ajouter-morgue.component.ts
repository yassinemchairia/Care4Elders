import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { MorgueService } from 'src/app/services/morgue.service';

@Component({
  selector: 'app-ajouter-morgue',
  templateUrl: './ajouter-morgue.component.html',
  styleUrls: ['./ajouter-morgue.component.css']
})
export class AjouterMorgueComponent implements OnInit {
  morgue = {
    idMorgue: 0,
    nbCadavre: 0,
  };
  etablissement = {
    idEtab: 1
  };
  etablissements: any[] = [];

  constructor(
    private service: MorgueService,
    private etabService: EtablissementService,
    private router: Router
  ) {}

  ngOnInit() {
    this.etabService.listeEtablissement().subscribe(
      (data: any) => {
        this.etablissements = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  ajouterEtAffecterMorgue() {
    this.service.ajouterMorgue(this.morgue).subscribe(
      (res: any) => {
        this.service.affecterMorgueToEtabliss(res, this.etablissement.idEtab).subscribe(
          (response: any) => {
            this.router.navigate(['/admin/listeMorgue']);
            console.log(response);
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }
  
}
