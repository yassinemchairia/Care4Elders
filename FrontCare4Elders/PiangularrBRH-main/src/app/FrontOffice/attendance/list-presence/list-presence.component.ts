import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { Cuisinier } from '../../models/Cuisinier';

@Component({
  selector: 'app-list-presence',
  templateUrl: './list-presence.component.html',
  styleUrls: ['./list-presence.component.css']
})
export class ListPresenceComponent implements OnInit {
  searchText: string = '';
  page: number = 1; // Page actuelle
  pageSize: number = 3;
  attendances: any;
  cuisinier_Connecter!: Cuisinier;

constructor(private att:AttendanceService){}
extractDate(dateTimeString: string): string {
  // Si dateTimeString est au format ISO 8601 (par exemple, "2024-04-28T12:00:00")
  const datePart = dateTimeString.split('T')[0];
  return datePart;
}
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
    this.att.retrievePresence(this.cuisinier_Connecter.idC).subscribe(
      res => {
        console.log(res);
        this.attendances = res;
      },
      error => {
        console.log('Erreur survenue :', error);
      }
    );  }
  }


}
