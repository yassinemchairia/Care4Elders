// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription, interval } from 'rxjs';
// import { OrdenanceService } from 'src/app/services/ordenance.service';

// @Component({
//   selector: 'app-afiche-les-ordenance-by-rdv',
//   templateUrl: './afiche-les-ordenance-by-rdv.component.html',
//   styleUrls: ['./afiche-les-ordenance-by-rdv.component.css']
// })
// export class AficheLesOrdenanceByRDVComponent implements OnInit, OnDestroy {
//   rendezVous: any[] = [];
//   ordonnances: any[] = [];
//   heureActuelle: Date = new Date();
//   prochainRdv: Date | undefined;
//   actualisationSubscription: Subscription | undefined;

//   constructor(private rendezVousService: OrdenanceService) { }

//   ngOnInit(): void {
//     // Abonnement à l'observable interval pour rafraîchir la page toutes les minutes
//     this.actualisationSubscription = interval(60000).subscribe(() => {
//       this.actualiserPage();
//     });

//     // Récupérer les rendez-vous du médecin depuis votre service
//     this.rendezVousService.getRendezVousDuMedecin(2).subscribe((data: any[]) => {
//       this.rendezVous = data;

//       console.log(data,"///////////////////SSSSSS")
//       // Trouver le rendez-vous en cours
//       const rendezVousEnCours = this.rendezVous.find(rdv => {
//         const heureRdv = new Date(rdv.dateRDV);
//         return heureRdv.getHours() === this.heureActuelle.getHours() && heureRdv.getMinutes() === this.heureActuelle.getMinutes();
//       });
    
//       // Si un rendez-vous est en cours, récupérer les ordonnances du patient associé
//       if (rendezVousEnCours) {
//         this.rendezVousService.getOrdonnancesByPatient(rendezVousEnCours.patient.idpatient).subscribe((data: any[]) => {
//           this.ordonnances = data;
//         });
//       }
//     });
//   }

//   ngOnDestroy(): void {
//     // Désabonnement de l'observable lors de la destruction du composant
//     if (this.actualisationSubscription) {
//       this.actualisationSubscription.unsubscribe();
//     }
//   }

//   actualiserPage(): void {
//     // Appel pour récupérer le prochain rendez-vous du médecin
//     this.rendezVousService.getProchainRendezVousDuMedecin(2).subscribe((prochainRdv: Date) => {
//       this.prochainRdv = prochainRdv;

//       // Actualise la page si le prochain rendez-vous est atteint
//       if (this.prochainRdv && this.prochainRdv <= this.heureActuelle) {
//         window.location.reload(); 
//       }
//     });
//   }

// }

// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription, interval } from 'rxjs';
// import { OrdenanceService } from 'src/app/services/ordenance.service';

// @Component({
//   selector: 'app-afiche-les-ordenance-by-rdv',
//   templateUrl: './afiche-les-ordenance-by-rdv.component.html',
//   styleUrls: ['./afiche-les-ordenance-by-rdv.component.css']
// })
// export class AficheLesOrdenanceByRDVComponent implements OnInit, OnDestroy {
//   rendezVous: any[] = [];
//   ordonnances: any[] = [];
//   heureActuelle: Date = new Date();
//   prochainRdv: Date | undefined;
//   actualisationSubscription: Subscription | undefined;
//   dureeEntreRdv: number | undefined;

//   // Sauvegarde des données actuelles
//   sauvegardeRendezVous: any[] = [];
//   sauvegardeOrdonnances: any[] = [];

//   constructor(private rendezVousService: OrdenanceService) { }

//   ngOnInit(): void {
//     // Abonnement à l'observable interval pour rafraîchir la page toutes les minutes
//     this.actualisationSubscription = interval(60000).subscribe(() => {
//       this.actualiserPage();
//     });

//     // Récupérer les rendez-vous du médecin depuis votre service
//     this.rendezVousService.getRendezVousDuMedecin(2).subscribe((data: any[]) => {
//       this.rendezVous = data;
//       this.sauvegardeRendezVous = [...data]; // Copie des données actuelles

//       // Trouver le rendez-vous en cours
//       const rendezVousEnCours = this.rendezVous.find(rdv => {
//         const heureRdv = new Date(rdv.dateRDV);
//         return heureRdv.getHours() === this.heureActuelle.getHours() && heureRdv.getMinutes() === this.heureActuelle.getMinutes();
//       });
    
//       // Si un rendez-vous est en cours, récupérer les ordonnances du patient associé
//       if (rendezVousEnCours) {
//         this.rendezVousService.getOrdonnancesByPatient(rendezVousEnCours.patient.idpatient).subscribe((data: any[]) => {
//           this.ordonnances = data;
//           this.sauvegardeOrdonnances = [...data]; // Copie des données actuelles
//         });
//       }
//     });
//   }

//   ngOnDestroy(): void {
//     // Désabonnement de l'observable lors de la destruction du composant
//     if (this.actualisationSubscription) {
//       this.actualisationSubscription.unsubscribe();
//     }
//   }

//   actualiserPage(): void {
//     // Appel pour récupérer le prochain rendez-vous du médecin
//     this.rendezVousService.getProchainRendezVousDuMedecin(2).subscribe((prochainRdv: Date) => {
//       this.prochainRdv = prochainRdv;

//       // Actualise la page si le prochain rendez-vous est atteint
//       if (this.prochainRdv && this.prochainRdv <= this.heureActuelle) {
//         // Mettre à jour les données avec les sauvegardes
//         this.rendezVous = [...this.sauvegardeRendezVous];
//         this.ordonnances = [...this.sauvegardeOrdonnances];
        
//         window.location.reload(); 
//       }
//     });
//   }
// }
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { OrdenanceService } from 'src/app/services/ordenance.service';

@Component({
  selector: 'app-afiche-les-ordenance-by-rdv',
  templateUrl: './afiche-les-ordenance-by-rdv.component.html',
  styleUrls: ['./afiche-les-ordenance-by-rdv.component.css']
})
export class AficheLesOrdenanceByRDVComponent implements OnInit, OnDestroy {
  rendezVous: any[] = [];
  ordonnances: any[] = [];
  heureActuelle: Date = new Date();
  prochainRdv: Date | undefined;
  actualisationSubscription: Subscription | undefined;
  dureeEntreRdv: number | undefined;

  constructor(private rendezVousService: OrdenanceService) { }

  ngOnInit(): void {
    // Abonnement à l'observable interval pour rafraîchir la page toutes les minutes
    this.actualisationSubscription = interval(60000).subscribe(() => {
      this.actualiserPage();
    });

    // Récupérer les rendez-vous du médecin depuis votre service
    this.rendezVousService.getRendezVousDuMedecin(2).subscribe((data: any[]) => {
      this.rendezVous = data;
      this.sauvegarderDonneesLocalement('rendezVous', data); // Sauvegarde des rendez-vous

      // Trouver le rendez-vous en cours
      const rendezVousEnCours = this.rendezVous.find(rdv => {
        const heureRdv = new Date(rdv.dateRDV);
        return heureRdv.getHours() === this.heureActuelle.getHours() && heureRdv.getMinutes() === this.heureActuelle.getMinutes();
      });
    
      // Si un rendez-vous est en cours, récupérer les ordonnances du patient associé
      if (rendezVousEnCours) {
        this.rendezVousService.getOrdonnancesByPatient(rendezVousEnCours.patient.idpatient).subscribe((data: any[]) => {
          this.ordonnances = data;
          this.sauvegarderDonneesLocalement('ordonnances', data); // Sauvegarde des ordonnances
        });
      }
    });

    // Charger les données locales si elles existent
    const savedRendezVous = this.chargerDonneesLocalement('rendezVous');
    if (savedRendezVous) {
      this.rendezVous = savedRendezVous;
    }

    const savedOrdonnances = this.chargerDonneesLocalement('ordonnances');
    if (savedOrdonnances) {
      this.ordonnances = savedOrdonnances;
    }
  }

  ngOnDestroy(): void {
    // Désabonnement de l'observable lors de la destruction du composant
    if (this.actualisationSubscription) {
      this.actualisationSubscription.unsubscribe();
    }
  }

  actualiserPage(): void {
    // Appel pour récupérer le prochain rendez-vous du médecin
    this.rendezVousService.getProchainRendezVousDuMedecin(2).subscribe((prochainRdv: Date) => {
      this.prochainRdv = prochainRdv;

      // Actualise la page si le prochain rendez-vous est atteint
      if (this.prochainRdv && this.prochainRdv <= this.heureActuelle) {
        window.location.reload(); 
      }
    });
  }

  // Fonction pour sauvegarder les données localement
  sauvegarderDonneesLocalement(cle: string, donnees: any[]): void {
    localStorage.setItem(cle, JSON.stringify(donnees));
  }

  // Fonction pour charger les données locales
  chargerDonneesLocalement(cle: string): any[] | null {
    const donnees = localStorage.getItem(cle);
    return donnees ? JSON.parse(donnees) : null;
  }
}
