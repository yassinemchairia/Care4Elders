import { Component } from '@angular/core';
import { AjouterAmbulancierComponent } from '../ajouter-ambulancier/ajouter-ambulancier.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AjouteraffAmbulanceService } from 'src/app/services/ajouteraff-ambulance.service';

@Component({
  selector: 'app-update-ambulancier',
  templateUrl: './update-ambulancier.component.html',
  styleUrls: ['./update-ambulancier.component.css']
})
export class UpdateAmbulancierComponent {
  constructor(private service:AjouteraffAmbulanceService,private router:Router,private activatedRoute:ActivatedRoute) {

}
ambulancier:any
idAmbilancier:any


routeSub!: Subscription;
  ngOnInit(): void {

    this.ambulancier={
      idAmbilancier:null,
      nom:null,  
    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.idAmbilancier = params['id']; });
     
     this.service.getAmbulancier(this.idAmbilancier).subscribe(p =>{
      console.log(p);
      this.ambulancier = p;
    
    });
  }
  modifierAmbulancier(){
    this.service.modifierAmbulancier(this.ambulancier,).subscribe(
      res => {
        this.ambulancier = {
          nom: '',
        };
        console.log(res)
        this.router.navigate(['/admin/listeAmbulancier']);

      },
      err => {
        console.log(err); 
      }
    );
  }
}