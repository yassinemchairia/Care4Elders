import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent {
  selectedImageFile: File | undefined;
  imageURL: string | undefined;
  constructor(private service:ProduitService,private router:Router,private srvc: BrahmiUploadService) {

  }
  produit = {
    nomproduit: '',
    description: '',
    image: '',
    prix: 0
   

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
            this.produit.image  = response.imageURL;
           
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
  ajouterProduit(){
    this.ajouterImage(() => {
    this.service.ajouterProduit(this.produit ,).subscribe(
      (res: any) => {
        this.produit  = {
          nomproduit: '',
          description: '',
          image: '',
          prix: 0
        
        };
        console.log(res)
        this.router.navigate(['/admin/listProduit']);

      },
      err => {
        console.log(err); 
      }
    );
  });
}
}