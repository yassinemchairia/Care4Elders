import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-ajouter-medicament',
  templateUrl: './ajouter-medicament.component.html',
  styleUrls: ['./ajouter-medicament.component.css']
})
export class AjouterMedicamentComponent {
  selectedImageFile: File | undefined;
  imageURL: string | undefined;
  constructor(private srvc: BrahmiUploadService,private service:MedicamentService,private router:Router,) {

  }
  med = {
    nomMed: '',
    image:'',
    descMed: '',
    catMedicament: '',
    prixMed: 0.0

  };
  catMedicament = [
    'ANALGESIQUE',
    'ANTIBIOTIQUE',
    'ANTIVIRAL',
    'ANTIINFLAMMATOIRE',
    'ANTIDEPRESSEUR',
    'ANTIPSYCHOTIQUE',
    'HYPOTENSEUR',
    'DIURETIQUE',
    'VACCIN'
  ];

  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }
  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.srvc.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.med.image  = response.imageURL;
           
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


  ajouterMedicament(){
    this.ajouterImage(() => {
    this.service.ajouterMedicament(this.med,).subscribe(
      res => {
        this.med = {
          nomMed: '',
          image:'',
          descMed: "",
          catMedicament: "",
          prixMed: 0.0,
        
        };
        console.log(res)
        this.router.navigate(['/listeMedicaments']);

      },
      err => {
        console.log(err); 
      }
    );
  });
  }
}
