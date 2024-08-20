import { Injectable } from '@angular/core';
import { Role } from 'src/app/FrontOffice/models/Role';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  constructor() { }

  
  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  // public getRoles(): string[] {
  //   const rolesString = localStorage.getItem('roles');
  //   if (rolesString) {
  //     return JSON.parse(rolesString);
  //   } else {
  //     return [];
  //   }
  // }
  public getRoles(): Role[] {
    const rolesString = localStorage.getItem('roles');
    if (rolesString) {
      return JSON.parse(rolesString) as Role[]; // Convertit la chaîne JSON en tableau d'objets Role
    } else {
      return [];
    }
  }
  
  public getRoleNames(): string[] {
    const roles: Role[] = this.getRoles();
    return roles.filter(role => role && role.name !== undefined).map(role => role.name!);
  }
  

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }


  public getToken(): string {
    const token = localStorage.getItem('jwtToken');
    return token ?? ''; // Utilisation de l'opérateur de coalescence nulle pour renvoyer une chaîne vide si le token est null
  }
  

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }


}
