import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { th } from 'date-fns/locale';
import { PatientService } from 'src/app/services/patient.service';
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-modifier-pat-etab',
  templateUrl: './modifier-pat-etab.component.html',
  styleUrls: ['./modifier-pat-etab.component.css']
})
export class ModifierPatEtabComponent {
  patient:any;
  id!:number;
  constructor(private service: RdvService,private shared: PatientService, private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    let Patient = this.shared.GetPatient();
    console.log(Patient);
    console.log("i Get it ");
     this.patient= Patient

  
    let routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
  modifierTypePatient(idPatient:number,KillIt:any) {
    const patientToUpdate = {
      ...this.patient, 
      typatient: this.patient.typatient ,
    
    };
    if(KillIt == "NORMAL")
      {
        this.service.modifierPatientGeneric(this.patient).subscribe(res=>{
            console.log(res);
            
        });
          
      }
        else if(KillIt == "DECEDE"){
          this.service.modifierPatientGeneric(this.patient).subscribe(res=>{
            console.log(res);
            
        });

        }

        this.router.navigate(['/SuiviePatEtab']);

 

  }
  


}
