import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-listeetablissement',
  templateUrl: './listeetablissement.component.html',
  styleUrls: ['./listeetablissement.component.css']
})
export class ListeetablissementComponent {
  etablissements: any; 
  searchTerm: string = ''; 

  constructor(private shared: EtablissementService,private router:Router) {}

  ngOnInit(): void {
    this.shared.listeEtablissement()
      .subscribe(
        res => {
          console.log(res);
          this.etablissements = res;
        },
        err => {
          console.log(err);
        }
      ); 
  }
  getAddressForItem(item: any) {
    this.shared.getAddressFromCoordinates(item.longitude, item.latitude).subscribe(
      (address: string) => {
        item.adresse = address; 
      },
      (err: any) => {
        console.error(err);
      }
    );
  }
  rechercher() {
    if (!this.searchTerm.trim()) {
      this.ngOnInit();
      return;
    }

    this.etablissements = this.etablissements.filter(
      (item: any) =>
        item.nomEtab.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.numFixe.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.adresse.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.form-inline')) {
      this.searchTerm = '';
    }
  }
  delete(id: number) {
    console.log("Deleting  with ID:", id);
    this.shared.supprimerEtablissement(id)
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
  buttonAjouter(){
    this.router.navigate(['admin/ajouterEtablissement'])
  }
  buttonModifier(id:any){
    this.router.navigate(['admin/modifierEtablissement/'+id])
  }
}
