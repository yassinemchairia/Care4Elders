import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthServiceService } from 'src/app/serives/auth/user-auth-service.service';
import { AttendanceService } from 'src/app/services/attendance.service';
import { GestionpanierService } from 'src/app/services/gestionpanier.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Cuisinier } from '../models/Cuisinier';

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.css']
})
export class HeaderFrontComponent implements OnInit {
  idPanier: number = 1; 
  nombreTotalProduits: number = 0;
  constructor(private router:Router,
    private userAuthServiceService : UserAuthServiceService,public _gestionPanier: GestionpanierService,
    private localStorageService: LocalStorageService,private attendanceService: AttendanceService){

  }
  roleNames: string[] = []; 
  isCuisinier: boolean = false;
  isHomless: boolean= false;
  isPatient: boolean= false;
  isMedecin: boolean= false;
  isOrganisateurr: boolean = false;
  isINFERMIER: boolean = false;
  cuisinier_Connecter!: Cuisinier;

  ngOnInit(): void {
    // Appelez la méthode pour calculer le nombre total de produits dans le panier lors de l'initialisation
   // this.calculerNombreTotalProduitsHeader();
   this.roleNames = this.userAuthServiceService.getRoleNames();
   console.log('Noms des rôles:', this.roleNames);
   this.isCuisinier = this.roleNames.includes('CUISINIER');
   this.isHomless = this.roleNames.includes('HOMELESS');
   this.isMedecin = this.roleNames.includes('MEDECIN');
   this.isPatient = this.roleNames.includes('PATIENT');
   this.isOrganisateurr = this.roleNames.includes('ORGANISATEUR');
   this.isINFERMIER = this.roleNames.includes('INFERMIER');

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
     const attendanceId = this.localStorageService.getItem('attendanceId');
     
     if (!attendanceId) {
       if (this.userAuthServiceService.isLoggedIn()) {
         this.startAttendance();
       }
     }
  }
  public isloged(){
    return  this.userAuthServiceService.isLoggedIn();
  }

  login(){
    this.router.navigate(['/login'])
  }
 
  logout() {
    this.stopAttendance(); // Arrêter l'attendance lors de la déconnexion
  
      this.userAuthServiceService.clear();
   }
  
   startAttendance(): void {
      // Démarrer l'attendance uniquement si l'utilisateur est connecté
      if (this.userAuthServiceService.isLoggedIn()) {
        this.attendanceService.startAttendance(this.cuisinier_Connecter.idC).subscribe(
          (response: number) => {
            console.log('Attendance started successfully.');
            this.localStorageService.setItem('attendanceId', response.toString());
          },
          (error) => {
            console.error('Failed to start attendance:', error);
          }
        );
      }
   }
  
   stopAttendance(): void {
      // Arrêter l'attendance uniquement si l'ID de l'attendance est présent dans le local storage
      const attendanceId = this.localStorageService.getItem('attendanceId');
      if (attendanceId) {
        this.attendanceService.endAttendance(attendanceId).subscribe(
          () => {
            console.log('Attendance ended successfully.');
            this.localStorageService.removeItem('attendanceId');
          },
          (error) => {
            console.error('Failed to end attendance:', error);
          }
        );
      }
    }
    produit(){
      this.router.navigate(['produits'])
    }
    panier(){
      this.router.navigate(['panier'])
    }
    favoris(){
      this.router.navigate(['Favoris'])
    }
    // calculerNombreTotalProduitsHeader(): void {
    //   // Utilisez le service de gestion du panier pour calculer le nombre total de produits dans le panier
    //   this._gestionPanier.calculerNombreProduitsDansPanier(this.idPanier).subscribe(
    //     nombre => {
    //       this.nombreTotalProduits = nombre;
    //     },
    //     err => {
    //       console.log('Erreur lors du calcul du nombre total de produits dans le panier :', err);
    //       // Gérez l'erreur ici, par exemple en affichant un message à l'utilisateur
    //     }
    //   );
    // }

    reclamation(){
      this.router.navigate(['ggg'])
    }
    listecounges(){
      this.router.navigate(['/FrontlisteCounges'])
    }
    ajoutcounges(){
      this.router.navigate(['/ajouterCounge'])
    }
    affRepas(){
      this.router.navigate(['/affRepas'])
    }
    
    
}
