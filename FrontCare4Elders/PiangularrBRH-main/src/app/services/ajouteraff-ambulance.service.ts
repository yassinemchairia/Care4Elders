import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjouteraffAmbulanceService {
  url : string = 'http://localhost:8087/ambulance/';
  url2 : string = 'http://localhost:8087/ambulancier/';



  constructor(private http: HttpClient) { }
  ajouterAmbulance(ambulance:any):Observable<any>{
    return this.http.post(this.url+"add-ambulance",ambulance)
  }
  listeAmbulance():Observable<any>{
    return this.http.get<any>(this.url+"retrieve-all-ambulance")
  }
  supprimerAmbulance(idAmb:any):Observable<any>{
    return this.http.delete<any>(this.url+"remove-ambulance/"+idAmb)
  }
  modifierAmbulance(ambulance:any):Observable<any>{
    return this.http.put<any>(this.url+"update-ambulance",ambulance)
  }
  getAmbulance(idAmb:any):Observable<any>{
    return this.http.get<any>(this.url+"retrieve-ambulance/"+idAmb)
  }
  affecterAmbulanceToEtabliss(ambulance: any, idEtab: number): Observable<any> {
    return this.http.put<any>(this.url + "ambulance/" + idEtab, ambulance);
  }

  DesaffecterAmbulanceToEtabliss(idAmb: number): Observable<any> {
    return this.http.put<any>(this.url + "desaffect/" + idAmb, {});
  }
  affecterAmbulancierToAmbulance(ambulancier: any, idAmb: number): Observable<any> {
    return this.http.put<any>(this.url2 + "ambulancier/" + idAmb, ambulancier);
  }
  ajouterAmbulancier(ambulancier:any):Observable<any>{
    return this.http.post(this.url2+"add-ambulancier",ambulancier)
  }
  listeAmbulancier():Observable<any>{
    return this.http.get<any>(this.url2+"retrieve-all-ambulancier")
  }

  desaffecterAmbulancierToAmbulance(idAmbilancier: number): Observable<any> {
    return this.http.put<any>(`${this.url2}ambulancier-dessaf/${idAmbilancier}`, {});
  }

  ajoutersimpleAmbulancier(ambulancier:any):Observable<any>{
    return this.http.post(this.url2+"add-ambulancier",ambulancier)
  }

  modifierAmbulancier(ambulancier:any):Observable<any>{
    return this.http.put<any>(this.url2+"update-ambulancier",ambulancier)
  }

  supprimerAmbulancier(idAmbulancier:any):Observable<any>{
    return this.http.delete<any>(this.url2+"remove-ambulancier/"+idAmbulancier)
  }
  getAmbulancier(idAmbulancier:any):Observable<any>{
    return this.http.get<any>(this.url2+"retrieve-ambulancier/"+idAmbulancier)
  }
}

