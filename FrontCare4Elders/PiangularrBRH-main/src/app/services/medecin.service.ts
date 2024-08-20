import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  url : string = 'http://localhost:8087/medecin/';
  url2 : string = 'http://localhost:8087/rdv/';



  constructor(private http: HttpClient) { }
  listeMedecin():Observable<any>{
    return this.http.get<any>(this.url+"retrieve-all-medecin")
  }
  supprimerMedecin(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"remove-medecin/"+id)
  }

  getMedecin(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrieve-medecin/"+id)
  }
  getRdvMedecin(id:number):Observable<any>{
    return this.http.get<any>(this.url2+"retrieveMed-rdv/"+id)
  }
  affecterMedecinToEtab(idMedecin: number, idEtab: number): Observable<any> {
    return this.http.put<any>(`${this.url}medecinss/${idMedecin}/${idEtab}`, {});
  }
  desactfMedecinEtabliss(idMedecin: number): Observable<any> {
    return this.http.put<any>(`${this.url}medecins-desaf/${idMedecin}`, {});
  }
  getTop3Medecins(startDate: string, endDate: string): Observable<any> {
    return this.http.get<any>(`${this.url}top3Medecins/${startDate}/${endDate}`);
  }
}
