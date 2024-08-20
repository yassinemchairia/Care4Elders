import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AjouteraffAmbulanceService } from 'src/app/services/ajouteraff-ambulance.service';

@Component({
  selector: 'app-detail-ambulance',
  templateUrl: './detail-ambulance.component.html',
  styleUrls: ['./detail-ambulance.component.css']
})
export class DetailAmbulanceComponent {
  constructor(private service:AjouteraffAmbulanceService,private router:Router,private activatedRoute:ActivatedRoute){

  }
  routeSub!: Subscription;
  
  ambulance:any
    id:any
  
  ngOnInit(): void {
  
    this.ambulance={
      idAmb: null,
      marque: null,
      matricule: null,
      busy: false,
      etatAmb: null,
      dateDernEntret: null,
      etablissement: null,
      ambilancier: null,
  
    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getAmbulance(this.id).subscribe(p =>{
      console.log(p);
      this.ambulance = p;
    
    });
  
  }
  buttonReturn(){
    this.router.navigate(['admin/listAmbulance'])
  }
  
}
