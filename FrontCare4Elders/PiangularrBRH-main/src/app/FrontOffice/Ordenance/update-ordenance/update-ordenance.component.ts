import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { OrdenanceService } from 'src/app/services/ordenance.service';

@Component({
  selector: 'app-update-ordenance',
  templateUrl: './update-ordenance.component.html',
  styleUrls: ['./update-ordenance.component.css']
})
export class UpdateOrdenanceComponent {
  constructor(private activatedRoute:ActivatedRoute,private dialog: MatDialog,private toast: NgToastService, private shared: OrdenanceService, private router: Router) { }

  
ord:any
  id:any


  routeSub!: Subscription;
  ngOnInit(): void {
    this.ord = {
      titre: null,
      instructions:null,         // Type de congé (à compléter)
      dosage:null,
      frequence:null,
      duree:null,
  
    };

    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.shared.getOrdenance(this.id).subscribe(p =>{
      console.log(p);
      this.ord = p;
    
    });
  
  }


  modifierEtablissement(){
    console.log("aa")

    this.shared.modifierOrdenance(this.ord).subscribe(
      res => {
        this.ord = {
          titre: '',
          instructions: '',         // Type de congé (à compléter)
          dosage:0,
          frequence:0,
          duree:0,

        };
        console.log(res)
        console.log(this.ord.id)

        this.router.navigate(['/affOrd']);

      },
      err => {
        console.log(err); 
      }
    );
  }
}
