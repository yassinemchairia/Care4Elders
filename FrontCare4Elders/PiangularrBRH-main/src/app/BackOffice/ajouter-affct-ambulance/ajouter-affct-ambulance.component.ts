import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjouteraffAmbulanceService } from 'src/app/services/ajouteraff-ambulance.service';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-ajouter-affct-ambulance',
  templateUrl: './ajouter-affct-ambulance.component.html',
  styleUrls: ['./ajouter-affct-ambulance.component.css']
})
export class AjouterAffctAmbulanceComponent implements OnInit {

  selectedImageFile: File | undefined;
  imageURL: string | undefined;


  ambulance = {
   idAmb:0,
    marque: '',
    matricule: '',
    busy: false,
    etatAmb: '',
   dateDernEntret: '',
   image: '',

   
  };
  etablissement = {
    idEtab:1
   
  };

  etablissements: any[] = []; 

  constructor(
    private service: AjouteraffAmbulanceService,
    private etabService: EtablissementService,
    private srvc: BrahmiUploadService,
    private router: Router
  ) {}

  ngOnInit() {
    this.etabService.listeEtablissement().subscribe(
      (data: any) => {
        this.etablissements = data; 
        console.log(data); 
      },
      error => {
        console.log(error); 
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }
  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.srvc.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.ambulance.image  = response.imageURL;
           
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
  ambulancier = {
 
    nom: '',
    prenom:'',
    mail:''
   
  };
  ajouterEtAffecterAmbulance() {
    this.ajouterImage(() => {

    this.service.ajouterAmbulance(this.ambulance).subscribe(
      res => {

        
        this.service.affecterAmbulanceToEtabliss(res, this.etablissement.idEtab).subscribe(
          response => {

            this.service.ajouterAmbulancier(this.ambulancier).subscribe(
              res => {
               
                
                this.service.affecterAmbulancierToAmbulance(res, response.idAmb).subscribe(
                  c => {
        
                    this.router.navigate(['/admin/listAmbulance']);
                    console.log(c); 
                  },
                  err => {
                    console.log(err); 
                  }
                );
              },
              err => {
                console.log(err); 
              }
            );

          },
          err => {
            console.log(err); 
          }
        );
      },
      err => {
        console.log(err); 
      }
    );
  })}

  
  ajouterEtAffecterAmbulancier() {
   
  }
}