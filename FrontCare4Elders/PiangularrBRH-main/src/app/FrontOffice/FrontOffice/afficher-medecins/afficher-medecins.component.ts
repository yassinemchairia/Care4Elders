import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-afficher-medecins',
  templateUrl: './afficher-medecins.component.html',
  styleUrls: ['./afficher-medecins.component.css']
})
export class AfficherMedecinsComponent {
  medecins: any;
  originalMedecins: any;
  searchTerm: string = '';

  constructor(private shared: MedecinService, private router: Router) {}

  ngOnInit(): void {
    this.shared.listeMedecin().subscribe(
      res => {
        console.log(res);
        this.medecins = res;
        this.originalMedecins = res; // Stockez les données initiales
      },
      err => {
        console.log(err);
      }
    );
  }

  rechercher() {
    if (!this.searchTerm.trim()) {
      this.medecins = this.originalMedecins; // Utilisez les données initiales si le terme de recherche est vide
      return;
    }

    this.medecins = this.originalMedecins.filter(
      (item: any) =>
        item.etablissement.nomEtab.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.prenom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.form-inline')) {
      this.searchTerm = '';
      this.rechercher(); // Réinitialisez la recherche lorsque vous cliquez en dehors de la zone de recherche
    }
  }
}
