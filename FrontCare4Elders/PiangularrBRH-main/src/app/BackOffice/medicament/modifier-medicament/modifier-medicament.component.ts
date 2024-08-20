import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-modifier-medicament',
  templateUrl: './modifier-medicament.component.html',
  styleUrls: ['./modifier-medicament.component.css']
})
export class ModifierMedicamentComponent {

  constructor(private upload:BrahmiUploadService,private service:MedicamentService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
  med:any
  id:any

  selectedImageFile: File | undefined;


  routeSub!: Subscription;

  ngOnInit(): void {

    this.med={
      nomMed: null,
      image:null,
      descMed: null,
      catMedicament: null,
      prixMed: null

    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.service.getMedicament(this.id).subscribe(p =>{
      console.log(p);
      this.med = p;
    
    });
  
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
            this.med.image = response.imageURL;
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
  modifierMedicament(){
    this.ajouterImage(() => {

    this.service.modifierMedicament(this.med,).subscribe(
      res => {
        this.med = {
          nomMed: '',
          descMed: '',
          image:'',
          catMedicament: '',
          prixMed: 0.0
        
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
