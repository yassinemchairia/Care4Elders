import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AjouteraffAmbulanceService } from 'src/app/services/ajouteraff-ambulance.service';

@Component({
  selector: 'app-update-ambulance',
  templateUrl: './update-ambulance.component.html',
  styleUrls: ['./update-ambulance.component.css']
})
export class UpdateAmbulanceComponent {
  constructor(private service:AjouteraffAmbulanceService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
ambulance:any
  id:any

 



  routeSub!: Subscription;
  ngOnInit(): void {

    this.ambulance={
      idAmb:null,
      marque:null,
      matricule:null,
      busy: null,
      etatAmb: null,


    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getAmbulance(this.id).subscribe(p =>{
      console.log(p);
      this.ambulance = p;
    
    });
  this.getAllAmbulancier()
  }

listambulanciers:any
getAllAmbulancier(){
  this.service.listeAmbulancier().subscribe(res=>{
  this.listambulanciers=res
  console.log(res)
  })


}
selectedAmbulancier !: { id: number, nom: string };

onSelectAmbulancier(selectedAmbulancier: { id: number, nom: string }) {
  this.newAmbilancier.idAmbilancier =selectedAmbulancier.id;
  this.newAmbilancier.nom=selectedAmbulancier.nom
    // Utilize the selected ambulancier's ID and name as you wish
    console.log("ID de l'ambulancier sélectionné:", selectedAmbulancier.id);
    console.log("Nom de l'ambulancier sélectionné:", selectedAmbulancier.nom);
    // Other actions to perform with the selected ambulancier's ID and name...
}



newAmbilancier={

  idAmbilancier:0,
  nom:''
 }
 dessafecterAmbulancier() {
  if (this.ambulance.ambilancier?.idAmbilancier !== this.newAmbilancier.idAmbilancier) {
    // Désaffecter l'ancien ambulancier et affecter le nouveau ambulancier
    this.service.desaffecterAmbulancierToAmbulance(this.ambulance.ambilancier?.idAmbilancier).subscribe(() => {
      this.service.affecterAmbulancierToAmbulance(this.newAmbilancier, this.ambulance.idAmb).subscribe((res) => {

      });
    });
  } else {
    // Si aucun changement d'ambulancier n'est effectué, mettre simplement à jour l'ambulance

  }
}




updateAmbulance() {
  this.service.modifierAmbulance(this.ambulance).subscribe(
    res => {

      this.router.navigate(['/admin/listAmbulance']);
    },
    err => {
      console.log(err);
    }
  );
}
}

