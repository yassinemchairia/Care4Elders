import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-liste-death-patient',
  templateUrl: './liste-death-patient.component.html',
  styleUrls: ['./liste-death-patient.component.css']
})
export class ListeDeathPatientComponent {
  listeDeath: any; 
  today: Date = new Date();
  constructor(private shared: PatientService,private router:Router) {}
  ngOnInit(): void {
    this.getListDeathPatient()

}
getListDeathPatient(){
  this.shared.getPatientsDeath()
  .subscribe(
    res => {
      console.log(res);
      this.listeDeath = res;
    },
    err => {
      console.log(err);
    }
  ); 
}
unassignPatientFromMorgue(idPatient: number) {
  this.shared.unassignPatientFromMorgue(idPatient)
    .subscribe(
      response => {
        console.log('Patient désaffecté de la morgue avec succès :', response);
        this.getListDeathPatient();
      },
      error => {
        console.error('Erreur lors de la désaffectation du patient de la morgue :', error);
      }
    );
}
}
