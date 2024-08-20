import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { EtablissementService } from 'src/app/services/etablissement.service';
import * as L from 'leaflet';



@Component({
  selector: 'app-ajouter-etablissement',
  templateUrl: './ajouter-etablissement.component.html',
  styleUrls: ['./ajouter-etablissement.component.css']
})
export class AjouterEtablissementComponent implements AfterViewInit {

  selectedImageFile: File | undefined;
  imageURL: string | undefined;
  lat !: any;
  lon !: any;
  constructor(private service: EtablissementService, private router: Router, private srvc: BrahmiUploadService) {}

  etab = {
    nomEtab: '',
    numFixe: '',
    adresse: '',
    typeEtab: '',
    nbLits: 0,
    prixNuit: 0.0,
    image: '',
    x: 0.0,
    y: 0.0
  };

  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }

  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.srvc.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.etab.image  = response.imageURL;
           
            callback();
          } else {
            console.error('Error: Image URL not found in response.');
            callback();
          }
        },
        error => {
          console.error('Error uploading image:', error);
          callback();
        }
      );
    } else {
      console.error('No image selected');
      callback();
    }
  }
  

  ajouterEtablissement() {
    this.lat = document.querySelector<HTMLInputElement>("#lat")!.value;
    this.lon = document.querySelector<HTMLInputElement>("#lon")!.value;
    this.etab.x = this.lat;
    this.etab.y = this.lon;
    this.ajouterImage(() => {
      this.service.ajouterEtablissement(this.etab).subscribe(
        (res: any) => {
          this.etab = {
            nomEtab: '',
            numFixe: '',
            adresse: '',
            typeEtab: '',
            nbLits: 0,
            prixNuit: 0.0,
            image: '',
            x: 0.0,
            y: 0.0
          };
          console.log(res);
          this.router.navigate(['/admin/listeEtablissement']);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  ngAfterViewInit(){
    let marqueur: L.Marker;
    let map = L.map("maCarte").setView([33.892166, 9.561555], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


      function onMapClick(e: L.LeafletMouseEvent) {
        let pos = e.latlng;
        addMarker(pos, map);
        document.querySelector<HTMLInputElement>("#lat")!.value = pos.lat.toString();
        document.querySelector<HTMLInputElement>("#lon")!.value = pos.lng.toString();
      }

      map.on('click', onMapClick);
     
  

      function addMarker(pos: L.LatLngExpression, carte: L.Map) {
        if (marqueur != undefined) {
          carte.removeLayer(marqueur);
        }
        marqueur = L.marker(pos , {
          draggable: true
        });
        marqueur.on("dragend", function(e) {
          pos = e.target.getLatLng() as L.LatLng;
        });
      
        marqueur.addTo(map);
    }

  }
}
