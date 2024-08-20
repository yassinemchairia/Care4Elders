import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.css']
})
export class HeaderFrontComponent {
  constructor(private router:Router){

  }
  login(){
    this.router.navigate(['/login'])
  }
  buttonEtablissment(){
    this.router.navigate(['/etablissment'])
  }

}
