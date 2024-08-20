import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-list-rdvs',
  templateUrl: './list-rdvs.component.html',
  styleUrls: ['./list-rdvs.component.css']
})
export class ListRdvsComponent {
  listeRdv: any; 
  constructor(private shared: RdvService,private router:Router) {}
  ngOnInit(): void {
    this.getListeRdv()

}
getListeRdv(){
  this.shared.listeRdvs()
  .subscribe(
    res => {
      console.log(res);
      this.listeRdv = res;
    },
    err => {
      console.log(err);
    }
  ); 
}

}
