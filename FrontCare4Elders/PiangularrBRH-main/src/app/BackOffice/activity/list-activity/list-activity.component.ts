import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent {
activities:any;
searchText: string = '';
  page: number = 1; // Page actuelle
  pageSize: number = 2;

constructor(private http: HttpClient,private shared: ActivityService,private router:Router) {}
ngOnInit(): void {
  this.shared.getAllActivity()
    .subscribe(
      res => {
        console.log(res);
        this.activities = res;
      },
      err => {
        console.log(err);
      }
    ); 

}
Ajouter(){
  this.router.navigate(['admin/addActitvity'])
}


delete(id: number) {
  console.log("Deleting aide with ID:", id);
  this.shared.deleteActivity(id)
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



    modifier(id:any){
      this.router.navigate(['admin/updateActivity/'+id])
    }
    accepter(idActivity: number): void {
      this.shared.accepterActivite(idActivity).subscribe(
        res => {
          console.log(res);
          const activityToUpdate = this.activities.find((activity: any) => activity.idActivity === idActivity);
          if (activityToUpdate) {
            activityToUpdate.etat = 'ACCEPTED'; // Mettre à jour l'état de l'activité
          }
        
          this.ngOnInit();

         // this.ngOnInit(); // Rafraîchir la liste après acceptation
        },
        err => {
          console.log(err);
          // Gérer les erreurs
          this.router.navigate(['admin/listActivity'])
          this.ngOnInit();

        }
      );
    }
    loadActivities(): void {
      this.shared.getAllActivity().subscribe(
        res => {
          console.log(res);
          this.activities = res;
        },
        err => {
          console.log(err);
        }
      ); 
    }
    refuser(idActivity: number): void {
      this.shared.refuserActivite(idActivity).subscribe(
        res => {
          console.log(res);
          const activityToUpdate = this.activities.find((activity: any) => activity.idActivity === idActivity);
          if (activityToUpdate) {
            activityToUpdate.etat = 'REFUSED'; // Mettre à jour l'état de l'activité
          }
         
          this.ngOnInit();

        //  this.ngOnInit(); // Rafraîchir la liste après refus
        },
        err => {
          console.log(err);
          // Gérer les erreurs
          this.ngOnInit();

        }
      );
    }

    

}
