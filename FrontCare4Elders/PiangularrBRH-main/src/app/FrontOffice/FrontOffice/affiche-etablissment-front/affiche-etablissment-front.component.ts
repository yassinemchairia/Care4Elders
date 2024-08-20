import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-affiche-etablissment-front',
  templateUrl: './affiche-etablissment-front.component.html',
  styleUrls: ['./affiche-etablissment-front.component.css']
})
export class AfficheEtablissmentFrontComponent {
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
  buttonDetail(id:any){
    this.router.navigate(['detailetablissment/'+id])
  }
}
