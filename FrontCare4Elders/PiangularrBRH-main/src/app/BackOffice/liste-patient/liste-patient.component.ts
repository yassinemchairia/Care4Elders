import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent {
  listePatients: any; 
  constructor(private shared: PatientService,private router:Router) {}
  ngOnInit(): void {
    this.listePatient()

}
listePatient(){
  this.shared.listePatient()
  .subscribe(
    res => {
      console.log(res);
      this.listePatients = res;
    },
    err => {
      console.log(err);
    }
  ); 
}
delete(id: number) {
  console.log("Deleting  with ID:", id);
  this.shared.supprimerPatient(id)
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
