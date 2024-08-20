import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-liste-food',
  templateUrl: './liste-food.component.html',
  styleUrls: ['./liste-food.component.css']
})
export class ListeFoodComponent {
  @ViewChild('fileInput') fileInput: any;


  foods: any; 
  searchText: string = '';
  page: number = 1; // Page actuelle
  pageSize: number = 2;
  constructor(private http: HttpClient,private shared: FoodService,private router:Router) {}

  ngOnInit(): void {
    this.shared.listeFood()
      .subscribe(
        res => {
          console.log(res);
          this.foods = res;
        },
        err => {
          console.log(err);
        }
      ); 
  

 
  }

  
  Ajouter(){
    this.router.navigate(['ajouterFood'])
  }
  delete(idf: number) {
    console.log("Deleting aide with ID:", idf);
    this.shared.supprimerFood(idf)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      ); 

      }
  modifierM(id:any){
    this.router.navigate(['/modifierFood/'+id])
  }
  openFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.shared.ajouterFoodExcel(file).subscribe(
        response => {
          console.log('Fichier envoyé avec succès.', response);
          // Gérer la réponse de l'API ici si nécessaire
        },
        error => {
          console.error('Erreur lors de l\'envoi du fichier.', error);
          // Gérer les erreurs ici si nécessaire
        }
      );
    }
    window.location.reload();
  }
}
