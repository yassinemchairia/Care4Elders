import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfermierService {
  url : string = 'http://localhost:8087/infermier/';


  constructor(private http: HttpClient) { }
  listeInfermier():Observable<any>{
    return this.http.get<any>(this.url+"retrieve-all-infermier")
  }  
  affecterInfermierATablissement(idInfermier: number, idEtab: number): Observable<any> {
    return this.http.put<any>(`${this.url}infermierAff/${idInfermier}/${idEtab}`, {});
  }

  desaffecterInfermiertablissement(idInfermier: number): Observable<any> {
    return this.http.put<any>(`${this.url}infermierDesaff/${idInfermier}`, {});
  }

  supprimerInfermier(idInfermier: number): Observable<any> {
    return this.http.delete<any>(`${this.url}remove-infermier/${idInfermier}`);
  }
  trouverPatientsParInfermier(idInfermier: number): Observable<any> {
    return this.http.get<any>(`${this.url}retrieve-patientInfer/${idInfermier}`);
  }
}
