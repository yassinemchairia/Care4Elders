import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { CoungeService } from 'src/app/services/counge.service';
import { Cuisinier } from '../../models/Cuisinier';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-counge',
  templateUrl: './ajouter-counge.component.html',
  styleUrls: ['./ajouter-counge.component.css']
})
@Injectable()
export class AjouterCoungeComponent implements OnInit{

 
  cuisinier_Connecter!: Cuisinier;
  
  
  
  ngOnInit(): void {
    const UserConnected_String = localStorage.getItem('CUISINIER');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    console.log(UserConnected)
    if (UserConnected) {
      this.cuisinier_Connecter = {
        idC: UserConnected.idC,
        user: UserConnected.user,
        nom: UserConnected.nom,
        prenom: UserConnected.prenom,
        dateAjout: UserConnected.dateAjout,
        salaire: UserConnected.salaire,
        disponiblee: UserConnected.disponiblee,
        sexe: UserConnected.sexe
      }
      
      console.log(this.cuisinier_Connecter.idC);
    }

    // this.http.post('http://localhost:8087/counge/DemandeCoungeCuisine/1',{"description":"qds","dateDebut":"2024-04-27","dateFin":"2024-04-26","typeCounger":"COUNGER_SABBATIQUE"}).subscribe(
    //   (response) => {
    //     console.log('success');
    //   },
    //   (err) => {
    //     console.log("test1",err.error);
    //   }
    // );
  }
  

  coungerAdded: boolean = false; // Ajout de la variable booléenne

  constructor(private http:HttpClient, private toast: NgToastService,private service:CoungeService,private router:Router,) {}
  showSuccess() {
    // this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:'5000'});
  }
  
  showError() {
    this.toast.error({detail:"ERROR",summary:'Your Error Message',sticky:true});
  }

  showInfo() {
    this.toast.success({detail:"INFO",summary:'Counger ajouté avec succéé',sticky:true});
  }

  // showWarn() {
  //   this.toast.warn({detail:"WARN",summary:'Your Warn Message',duration:'5000'});
  // }
  counge = {
    description: '',
    dateDebut: new Date(), // Date de début initialisée à la date actuelle
    dateFin: new Date(),   // Date de fin initialisée à la date actuelle
    typeCounger: ''         // Type de congé (à compléter)
  };
  showMessage(): void {
    this.toast.success({detail:"SUCCESS",summary:'Counger ajouté avec succéé',sticky:true});
  }
  // ajouterConge() {
  //   this.service.demandeCounge(this.cuisinier_Connecter.idC, this.counge).subscribe(
  //     (res: any) => {
  //       // Réinitialisation du congé après l'ajout
  //       this.counge = {
  //         description: '',
  //         dateDebut: new Date(),
  //         dateFin: new Date(),
  //         typeCounger: ''
  //       };
  
  //       // Affichage de la notification de succès
  //       this.toast.success({ detail: res, summary: 'Congé ajouté avec succès', sticky: true });
  //       this.router.navigate(['/FrontlisteCounges']);
  //     },
  //     (error: any) => {
  //       let errorMessage = 'Une erreur s\'est produite lors de l\'ajout du congé';
  //       if (error.error && error.error.message) {
  //         errorMessage = error.error.message; // Utilise le message renvoyé par le serveur
  //         console.log("condition1")
  //       } else {
  //         errorMessage = error.message;
  //         console.log("condition2")

  //       }
  //       // Affichage de la notification d'erreur
  //       this.toast.error({ detail: errorMessage, summary: 'Erreur', sticky: true });
  //     }
  //   );
  // }
  ajouterConge() {
    this.service.demandeCounge(this.cuisinier_Connecter.idC, this.counge)
  .subscribe(res=>{},(error:HttpErrorResponse)=>{
    if(error.status=== 400){

      this.toast.error({ detail: error.error, summary: 'Erreur', sticky: true });
    }else{
      alert("Coungé Ajouter avec succès")
      this.toast.success({ detail: "Coungé Ajouter avec succès", summary: 'Scucces', sticky: true });
      this.router.navigate(['/FrontlisteCounges']);
    }
    console.log(error.error)
  })

}
  
  
  
  }
