import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  url : string = 'http://localhost:8087/rdv/';
  url2 : string = 'http://localhost:8087/patient/';
  private baseUrl = 'http://localhost:8087'; 

  constructor(private http: HttpClient) { }
  ajouterRdv(rdv:any):Observable<any>{
    return this.http.post(this.url+"add-rdv",rdv)
  }
  listeRdvs():Observable<any>{
    return this.http.get<any>(this.url+"retrieve-all-rdv")
  }
  supprimerRdv(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"remove-rdv/"+id)
  }
  modifierRdv(rdv:any):Observable<any>{
    return this.http.put<any>(this.url+"update-rdv",rdv)
  }
  getRdv(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrieve-rdv/"+id)
  }
  affecterRdv(rdv: any,idMedecin : number, idPatient:number, dateRDV:any): Observable<any> {
    //const { idMedecin, idPatient, dateRDV } = rdv;
    return this.http.put<any>(`${this.url}affect-rdv/${idMedecin}/${idPatient}/${dateRDV}`, rdv);
 }

  modifierPatientRdv(patient:any):Observable<any>{
    return this.http.put<any>(this.url2+"update-patient",patient)
  }
  downloadPdf(id: number): Observable<Blob> {
    const url = `${this.baseUrl}/export-pdf/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/pdf',
    });
    return this.http.get(url, {
      responseType: 'blob',
      headers: headers,
    });

    
  }

  exportRdvsToExcel(idMedecin: number, fileName: string): Observable<Blob> {
    const url4 = `${this.url}rdv/export/${idMedecin}?fileName=${fileName}`;
  
    return this.http.get(url4, { responseType: 'blob' });
 }
 modifierPatientGeneric(patient:any):Observable<any>{
  return this.http.put<any>(this.url2+"update-patient-Etab",patient)
}
}
