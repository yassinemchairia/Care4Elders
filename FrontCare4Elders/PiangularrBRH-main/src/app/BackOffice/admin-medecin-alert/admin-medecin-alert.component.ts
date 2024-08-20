import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-admin-medecin-alert',
  templateUrl: './admin-medecin-alert.component.html',
  styleUrls: ['./admin-medecin-alert.component.css']
})
export class AdminMedecinAlertComponent {
  alertm: any=[]; 

  constructor(private shared: AlertService,private router:Router) {}

  ngOnInit(): void {
    this.getAlertsPerMedecin();
  }

  getAlertsPerMedecin() {
    this.shared.getAlertsPerMedecin().subscribe(
      response => {
        console.log(response);
        this.alertm = response; 
        console.log(this.alertm.medecin.idMedecin,"sayyyyyyyyyeb")// Assurez-vous que la réponse initialise correctement alertm
      },
      error => {
        console.log('Erreur survenue :', error);
      }
    );
  }
  envoyerMail(idMedecin: number) {
    console.log('ID du médecin à envoyer un mail:', idMedecin);
    // Appel à la méthode d'envoi de mail du service avec l'ID du médecin
    this.shared.envoyermail(idMedecin)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de l\'envoi du mail :', error);
          // Retourner un observable de valeur par défaut pour que le flux continue
          return of(null); // Vous pouvez retourner une autre valeur si nécessaire
        })
      )
      .subscribe(response => {
        if (response !== null) {
          console.log('Mail envoyé avec succès:', response);
          // Autres actions à effectuer en cas de succès de l'envoi
        } else {
          console.log('Échec de l\'envoi du mail.');
          // Gérer l'échec de l'envoi du mail ici
        }
      });
  }


}
