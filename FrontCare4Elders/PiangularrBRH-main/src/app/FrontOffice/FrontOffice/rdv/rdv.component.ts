import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent  implements OnInit{
  Rdv = {
    archiver: true,
  };
  

  RdvValue = {
    dateRDV:null,
    idMedecin: 0,
    idPatient:0
  };
  constructor(private route: ActivatedRoute,private service: RdvService,private router: Router
) { }

  ngOnInit(): void {
    const UserConnected_String = localStorage.getItem('Patient');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    
      this.RdvValue.idPatient=UserConnected.idpatient;
      this.route.params.subscribe(params => {
      this.RdvValue.idMedecin = + params['id'];
    });

    
  }
  submitDate(){
    console.log(this.RdvValue);
    

    this.service.affecterRdv(this.Rdv,this.RdvValue.idMedecin,this.RdvValue.idPatient,this.RdvValue.dateRDV).subscribe(
res => {
  console.log(res);
  this.router.navigate(['/Medecins']); 

}
    )
console.log(this.Rdv);


  }
}
