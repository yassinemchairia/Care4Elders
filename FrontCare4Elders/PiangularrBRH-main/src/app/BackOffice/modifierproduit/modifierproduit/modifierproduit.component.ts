import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProduitService } from 'src/app/services/produit.service';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent {

  constructor(private service:ProduitService,private router:Router,private activatedRoute:ActivatedRoute,private upload:BrahmiUploadService) {

  }
  selectedImageFile: File | undefined;
produit:any
  idProduit:any


  routeSub!: Subscription;
  modifierProduit(){
    this.ajouterImage(() => {
      
    this.service.modifierProduit(this.produit,).subscribe(
      res => {
        
        console.log(res)
        this.router.navigate(['/admin/listProduit']);

      },
      err => {
        console.log(err); 
      }
    );



  });

  }
  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.paramMap.get('idProduit');

    this.service.getProduit(this.idProduit) 
      .subscribe(
        res => {
          this.produit= res;
        },
        err => {
          console.log(err);
        }
      );
  }

  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }
  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.upload.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.produit.image = response.imageURL;
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
}
