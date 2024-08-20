import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EtablissementService } from 'src/app/services/etablissement.service';
import * as L from "leaflet";

@Component({
  selector: 'app-detail-etablissement',
  templateUrl: './detail-etablissement.component.html',
  styleUrls: ['./detail-etablissement.component.css']
})
export class DetailEtablissementComponent {
constructor(private service:EtablissementService,private router:Router,private activatedRoute:ActivatedRoute){

}
routeSub!: Subscription;

etab:any
  id:any

  ngOnInit(): void {
    this.etab = {
       idEtab: null,
       nomEtab: null,
       numFixe: null,
       adresse: null,
       typeEtab: null,
       nbLits: null,
       prixNuit: null,
       x: 0.0,
       y: 0.0
    };
   
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
       this.id = params['id'];
       this.service.getEtablissement(this.id).subscribe(p => {
         console.log(p);
         this.etab = p;
         this.initMap(); 
       });
    });
   }
   
   initMap() {
    let marqueur: L.Marker;
    let map = L.map("maCarte").setView([33.892166, 9.561555], 6);
   
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
   
    const latEtab = Number(this.etab.x);
    const lngEtab = Number(this.etab.y);
   
    marqueur = L.marker([latEtab, lngEtab], { draggable: true }).addTo(map);
   
    marqueur.on("dragend", (e) => {
       const newPos = e.target.getLatLng();
       document.querySelector<HTMLInputElement>("#lat1")!.value = newPos.lat.toString();
       document.querySelector<HTMLInputElement>("#lon1")!.value = newPos.lng.toString();
    });
   }
   

buttonReturn(){
  this.router.navigate(['/etablissment'])
}



}
