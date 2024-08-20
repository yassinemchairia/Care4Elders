import { Component } from '@angular/core';
import { RegisterRequest, Sexe, specialite } from '../models/register-request';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationService } from 'src/app/serives/authentication.service';
import { Router } from '@angular/router';
import { VerificationRequest } from '../models/verification-request';
import { Role } from '../models/Role';
import { FormControl } from '@angular/forms';
import { TypePatient } from '../models/Patient';
import { Specialite } from '../models/Medecin';
import * as L from 'leaflet';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isPatientRoleSelected: boolean = false;
  isCuisinerRoleSelected: boolean = false;
  isHOMELESSRoleSelected: boolean = false;
  isORGANISATEURRoleSelected: boolean = false;
  isINFERMIERRoleSelected: boolean = false;
  isAMBILANCIERRoleSelected: boolean = false;
  isMEDECINRoleSelected: boolean = false;
  isDONATEURoleSelected: boolean = false;
  

  // Make sure to initialize 'role' property with an appropriate value
  registerRequest: RegisterRequest = {
    roles: [],
   typeePatient : TypePatient.NORMAL, // Initialisez typeePatient avec une valeur de l'énumération TypePatient
   sexee: Sexe.FEMME,
    archiverr: true,
    poidd: 0,
    longueurr: 0,
    dateeDeNaissance: new Date() ,
    disponiblee: true,
    specialitee: Specialite.GENERAL,
    nom:"",
    prenom: "",
    dateAjoutee:new Date(), 
    sexeeee:Sexe.HOMME,
    salaire:0,
    disponibleeee:true,
    age: 0,
    situationMedicalee:" ",
     situationSocialee:" ",
     besoinsSpecifiquess:" ",
    localisationActuellee:" ",
    ffirstname:"",
    llastname:"",
   emaill:"",
   ntelephone:"",
   nomm:"",
   prenomm:"",
   mailm:"",
   nommed:"",
   prenommed:"", 
   mailmed:"",
   nominf:"",
   prenominf:"",
   mailif:"" ,
   disponiblenf:true,
   adresse: '',
      x: 0.0,
       y: 0.0,
        xxx :0.0,
       yyy :0.0,
     adressee:'',
     xx :0.0,
     yy :0.0,
     adressemed:''


    // Initialisez la date de naissance avec la date actuelle
  };
  typePatients = Object.values(TypePatient); // Obtenez les valeurs de l'énumération TypePatient
  sexees = Object.values(Sexe); 
  specialitee = Object.values(Specialite);
  sexeeee= Object.values(Sexe); 
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';
  lat !: any;
  lon !: any;
  roles: string[] = ['USER', 'MEDECIN', 'AMBILANCIER', 'INFERMIER', 'PATIENT', 'VISITEUR', 'ADMIN', 'DONATEUR', 'HOMELESS', 'ORGANISATEUR','CUISINIER'];
  constructor(
    private authService: AuthenticationService,
    private router: Router

  ) {
  }
   roleChosing!:any;

  registerUser() {
    this.lat = document.querySelector<HTMLInputElement>("#lat")!.value;
    this.lon = document.querySelector<HTMLInputElement>("#lon")!.value;
    this.registerRequest.x = this.lat;
    this.registerRequest.y = this.lon;
    this.roleChosing= this.registerRequest.roles;
    const role1: Role = {
      name: this.roleChosing
  };
    this.registerRequest.roles = [];
    this.registerRequest.roles.push(role1);
    
    this.isPatientRoleSelected = this.registerRequest.roles.some(role => role.name === 'PATIENT');
    this.isCuisinerRoleSelected = this.registerRequest.roles.some(role => role.name === 'CUISINIER');
    this.isMEDECINRoleSelected = this.registerRequest.roles.some(role => role.name === 'MEDECIN');
    this.isDONATEURoleSelected = this.registerRequest.roles.some(role => role.name === 'DONATEUR');
    this.isHOMELESSRoleSelected = this.registerRequest.roles.some(role => role.name === 'HOMELESS');
    this.isAMBILANCIERRoleSelected = this.registerRequest.roles.some(role => role.name === 'AMBILANCIER');
    this.isINFERMIERRoleSelected = this.registerRequest.roles.some(role => role.name === 'INFERMIER');
    this.isORGANISATEURRoleSelected = this.registerRequest.roles.some(role => role.name === 'ORGANISATEUR');


    this.message = '';
    console.log(this.registerRequest);
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000)
          }
        }
      });

  }

  verifyTfa() {
    this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = 'Account created successfully\nYou will be redirected to the login page in 3 seconds';
          setTimeout(() => {
            localStorage.setItem('token', response.token as string);
            this.router.navigate(['welcome']);
          }, 30);
        }
      });
  }
  addForm =new FormControl({
    


  })
  ngAfterViewInit(){
    let marqueur: L.Marker;
    let map = L.map("maCarte").setView([33.892166, 9.561555], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


      function onMapClick(e: L.LeafletMouseEvent) {
        let pos = e.latlng;
        addMarker(pos, map);
        document.querySelector<HTMLInputElement>("#lat")!.value = pos.lat.toString();
        document.querySelector<HTMLInputElement>("#lon")!.value = pos.lng.toString();
      }

      map.on('click', onMapClick);
     
  

      function addMarker(pos: L.LatLngExpression, carte: L.Map) {
        if (marqueur != undefined) {
          carte.removeLayer(marqueur);
        }
        marqueur = L.marker(pos , {
          draggable: true
        });
        marqueur.on("dragend", function(e) {
          pos = e.target.getLatLng() as L.LatLng;
        });
      
        marqueur.addTo(map);
    }

  }
}