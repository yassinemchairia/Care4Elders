import { Component } from '@angular/core';
import { ActivatedRoute, Router ,Params} from '@angular/router';
import { Subscription } from 'rxjs';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { EtablissementService } from 'src/app/services/etablissement.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-modifieretablissement',
  templateUrl: './modifieretablissement.component.html',
  styleUrls: ['./modifieretablissement.component.css']
})
export class ModifieretablissementComponent {
  constructor(private service:EtablissementService,private router:Router,private activatedRoute:ActivatedRoute,private upload:BrahmiUploadService) {

  }
  selectedImageFile: File | undefined;
  lat !: any;
  lon !: any;

etab:any
  id:any


  routeSub!: Subscription;
  ngOnInit(): void {

    this.etab={


    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getEtablissement(this.id).subscribe(p =>{
      console.log(p);
      this.etab = p;
    
    });
  
  }
  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }

  modifierEtablissement() {
    this.lat = document.querySelector<HTMLInputElement>("#lat")!.value;
    this.lon = document.querySelector<HTMLInputElement>("#lon")!.value;
    this.etab.x = this.lat;
    this.etab.y = this.lon;
    this.ajouterImage(() => {
      console.log("next")
      this.service.modifierEtablissement(this.etab).subscribe(
        res => {
          this.etab = {

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

  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.upload.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.etab.image = response.imageURL;
          } else {
            console.error('Error: Image URL not found in response.');
          }
          callback();
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