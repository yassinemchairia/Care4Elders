import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:any;
  password:any;
  user:any

  constructor(private service:LoginService,private router:Router,) {

  }

  login(){
    this.service.login(this.email,this.password).subscribe(u=>{
      this.user=u;
     console.log(u)
     this.router.navigate(['/'])

      // sessionStorage.setItem('token',this.user.token)
      // sessionStorage.setItem('role',this.user.role)
      // sessionStorage.setItem('id',this.user.idEmployee)
      // sessionStorage.setItem('email',this.user.email)

      // if((u.role=="PARTICULIER") && (u.approved==false)){
      //   this.router.navigate(['/dashboard'])
      // }
      // else{
      //   this.router.navigate(['/dashboard'])
      // }
    })

  }
}
