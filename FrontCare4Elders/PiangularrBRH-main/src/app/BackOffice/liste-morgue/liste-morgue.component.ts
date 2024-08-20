import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MorgueService } from 'src/app/services/morgue.service';

@Component({
  selector: 'app-liste-morgue',
  templateUrl: './liste-morgue.component.html',
  styleUrls: ['./liste-morgue.component.css']
})
export class ListeMorgueComponent {
  morgues: any; 
  constructor(private shared: MorgueService,private router:Router) {}
  ngOnInit(): void {
    this.shared.listeMorgue()
      .subscribe(
        res => {
          console.log(res);
          this.morgues = res;
        },
        err => {
          console.log(err);
        }
      ); 

      
  }
  delete(id: number) {
    console.log("Deleting aide with ID:", id);
    this.shared.supprimerMorgue(id)
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
    this.router.navigate(['admin/ajouterMorgue'])
  }
  buttonModifier(id:any){
    this.router.navigate(['admin/UpdateMorgue/'+id])
  }

}
