import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cuisinier } from 'src/app/FrontOffice/models/Cuisinier';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-affiche-plat',
  templateUrl: './affiche-plat.component.html',
  styleUrls: ['./affiche-plat.component.css']
})
export class AffichePlatComponent {
  searchText: string = '';
  page: number = 1; // Page actuelle
  pageSize: number = 4;
  plats: any; 
  cuisiniers: any; 
  cuisinier_Connecter!: Cuisinier;

  constructor(private shared: PlatService,private router:Router) {}

  ngOnInit(): void {
    this.shared.listePlats()
      .subscribe(
        res => {
          console.log(res);
          this.plats = res;
        },
        err => {
          console.log(err);
        }
      ); 
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

  
      this.shared.getCuisinier(this.cuisinier_Connecter.idC)
      .subscribe(
        res => {
          console.log(res);
          this.cuisiniers = res;
        },
        err => {
          console.log(err);
        }
      ); 
      
 
  }

  isGoldBadge(): boolean {
    return this.cuisiniers.typeBadge === 'GOLD';
  }

  isSilverBadge(): boolean {
    return this.cuisiniers.typeBadge === 'SILVER';
  }

  isBronzeBadge(): boolean {
    return this.cuisiniers.typeBadge === 'BRONZE';
  }
  AjouterPlat(){
    console.log("btn");
    this.router.navigate(['ajouterPlats']);
  }
  deleteT(idPlat: number) {
    console.log("Deleting aide with ID:", idPlat);
    this.shared.supprimerPlats(idPlat)
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
  modifierPlat(id:any){
    this.router.navigate(['modifierPlat/'+id])
  }
}
