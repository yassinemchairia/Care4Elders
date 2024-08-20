import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AjouteraffAmbulanceService } from 'src/app/services/ajouteraff-ambulance.service';

@Component({
  selector: 'app-ajouter-ambulancier',
  templateUrl: './ajouter-ambulancier.component.html',
  styleUrls: ['./ajouter-ambulancier.component.css']
})
export class AjouterAmbulancierComponent {
  constructor(private service: AjouteraffAmbulanceService, private router: Router) {}

ambulancier={
  nom:'',
  prenom:'',
  mail:''
}
ajouterAmbulancier() {
    this.service.ajoutersimpleAmbulancier(this.ambulancier).subscribe(
      (res: any) => {
        this.ambulancier = {
          nom: '',
          prenom:'',
          mail:''
      
        };
        console.log(res);
        this.router.navigate(['/admin/listeAmbulancier']);
      },
      err => {
        console.log(err);
      }
    );
  };
}

