import { Component, OnInit } from '@angular/core';
import { EvennementService } from '../../serives/eventsService/evennement.service';
import { GeocodingService } from '../../serives/eventsService/geocoding.service'; // Importez le service de géocodage
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { User } from 'src/app/FrontOffice/user/user.model';
import * as XLSX from 'xlsx';

interface user {
  id?: number;
  firstname?: string | null;
  lastname?: string | null; 
}
interface Event {
  id?: number;
  nomevennement?: string;
  discription?: string;
  date?: string;
  placeMax?: number;
  users?: string[];
}
@Component({
  selector: 'app-liste-evennement',
  templateUrl: './liste-evennement.component.html',
  styleUrls: ['./liste-evennement.component.css']
})
export class ListeEvennementComponent implements OnInit {
  users : user []= [{  firstname: "" ,  lastname: ""}] 

  evennements: any;
  searchTerm: string = '';

  constructor(private evennementService: EvennementService, 
              private geocodingService: GeocodingService, // Injectez le service de géocodage
              private router: Router) {}

  ngOnInit(): void {
    this.evennementService.getAllEvennements()
      .subscribe(
        res => {
          console.log(res);

          this.evennements = res;
          this.getUsersNamesByEvent();

          this.getPlaceNames();         
        },
        err => {
          console.log(err);
        }
      ); 
  }
  getUsersNamesByEvent(): void {
    this.evennements.forEach((event: Event) => {
      this.evennementService.getUsersNamesByEvent(event.id!).subscribe(
        (data: string[]) => {
          event.users = data;
        },
        err => {
          console.log('Erreur lors de la récupération des noms des utilisateurs pour l\'événement:', err);
        }
      );
    });
  }

  exportToExcel(event:  Event): void {
    const dataToExport: any[] = [];
    this.evennements.forEach((event: Event) => {
      event.users?.forEach(username => {
        dataToExport.push({
          'Event Name': event.nomevennement,
          'User First Name': username.split(' ')[0],
          'User Last Name': username.split(' ')[1] || '',
        });
      });
    });

      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* generate XLSX file and send to client */
      XLSX.writeFile(wb, 'user_data.xlsx');
    // Adjust delay as needed
  }
 // Méthode pour obtenir les noms de lieu pour chaque événement
 getPlaceNames() {
  this.evennements.forEach((event: any) => {
    this.geocodingService.getPlaceName(event.lat, event.lng)
      .subscribe(
        (data: any) => {
          if (data && data.display_name) {
            event.placeName = data.display_name;
          } else {
            event.placeName = 'Nom de la place non disponible';
          }
        },
        err => {
          console.log('Erreur lors de la récupération du nom de la place:', err);
          event.placeName = 'Erreur lors de la récupération du nom de la place';
        }
      );
  });
}
  delete(id: number) {
    console.log("Suppression de l'événement avec l'ID:", id);
    this.evennementService.supprimerEvennement(id)
      .subscribe(
        res => {
          console.log(res);
          // Mettez à jour la liste d'événements après la suppression
          this.evennements = this.evennements.filter((eve: { id: number; }) => eve.id !== id);
        },
        err => {
          console.log(err);
        }
      ); 
  }
  
  buttonAjouter() {
    this.router.navigate(['admin/ajouterEvennement']);
  }
  
  buttonModifier(id: any) {
    this.router.navigate(['admin/modifierEvennement/' + id]);
  }
  
  filterEvents() {
    if (this.evennements) {
      return this.evennements.filter((event: { nomevennement: string }) =>
        event.nomevennement.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        event.nomevennement.toString().includes(this.searchTerm)
      );
    } else {
      return [];
    }
  }
}
