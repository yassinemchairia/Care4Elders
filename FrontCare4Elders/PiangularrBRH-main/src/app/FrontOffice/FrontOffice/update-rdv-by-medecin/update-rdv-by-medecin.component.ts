import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-update-rdv-by-medecin',
  templateUrl: './update-rdv-by-medecin.component.html',
  styleUrls: ['./update-rdv-by-medecin.component.css']
})
export class UpdateRdvByMEdecinComponent implements OnInit {
  constructor(private service: RdvService, private router: Router, private activatedRoute: ActivatedRoute) {}
  rdv: any;
  id: any;
  routeSub!: Subscription;
  

  ngOnInit(): void {
    this.rdv = {
      idRDV: null,
      dateRDV: null,
      archiver: null,
      patient: {
        idpatient: null,
        user: null,
        nom: null,
        prenom: null,
        mail: null,
        typatient: null,
        archiver: null,
        poid: null,
        longueur: null,
        datedeNais: null,
        sexe: null,
        ambulance: null,
        etablissement: null,
        infermier: null,
        morgue: null,
        medecin: null,
        likeDislikePlats: []
      }
    };

    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.service.getRdv(this.id).subscribe(p => {
      console.log(p);
      this.rdv = p;
    });
  }

  modifierTypePatient() {
    const patientToUpdate = {
      ...this.rdv.patient, 
      typatient: this.rdv.patient.typatient ,
    
    };

    this.service.modifierPatientRdv(patientToUpdate).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/ListRdvMedecin']);
      },
      err => {
        console.log(err);
      }
    );
  }
  
}
