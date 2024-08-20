import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url : string = 'http://localhost:8087/patient/';
  url2 : string = 'http://localhost:8087/qr/';


  Patient:any;

  GetPatient(){
    return this.Patient;
  }
  SetPatient(patient:any){
   this.Patient=patient;
  }


  constructor(private http: HttpClient) { }
  listePatient():Observable<any>{
    return this.http.get<any>(this.url+"retrieve-all-patient")

  }

  supprimerPatient(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"remove-patient/"+id)
  }
  assignerPatientAmbulance(idPatient: number, idAmb: number): Observable<any> {
    return this.http.put<any>(this.url + `patientAmb/${idPatient}/${idAmb}`, {});
  }
  retrieveAmbulanceById(idPatient: number): Observable<any> {
    return this.http.get<any>(`${this.url}retrieveAmb-idAmbulance/${idPatient}`);
  }
  retrieveAllPatientInAmbulance(): Observable<any> {
    return this.http.get<any>(this.url + 'retrieveAllPatientAmb');
  }
  // unassignPatientAndAffectToEtab(idPatient: number, idEtab: number, idMed: number, idInfermier: number): Observable<any> {
  //   return this.http.put<any>(this.url + `patient-aff/${idPatient}/${idEtab}/${idMed}/${idInfermier}`, {});
  // }
  unassignPatientAndAffectToEtab(idPatient: number, idEtab: number, idMed: number, idInfermier: number): Observable<any> {
    return this.http.put<any>(`${this.url}patient-aff/${idPatient}/${idEtab}/${idMed}/${idInfermier}`, {});
  }
  assignerPatientMorgue(idPatient: number, idMorgue: number): Observable<any> {
    return this.http.put<any>(`${this.url}patient-decede/${idPatient}/${idMorgue}`, {});
  }

  // Nouvelle méthode pour désaffecter le patient de l'établissement
  desaffecterPatientEtab(idPatient: number): Observable<any> {
    return this.http.put<any>(`${this.url}desaffect-Etab/${idPatient}`, {});
  }
  getPatientsDeath():Observable<any>{
    return this.http.get<any>(this.url+"retrieve-Pat-death")

  }
  unassignPatientFromMorgue(idPatient: number): Observable<any> {
    return this.http.put<any>(`${this.url}desaffect-Morgue/${idPatient}`, {});
  }
  retrieveDateLastRdv(idPatient: number): Observable<any> {
    return this.http.get<any>(`${this.url}retrievedateLast/${idPatient}`);
  }


  generateQRCodeForPatient(id: number): Observable<any> {
    return this.http.get<any>(`${this.url2}patient/${id}/qrcode`, { responseType: 'blob' as 'json' });
  }
  retrievePatientinEtab(idEtab: number): Observable<any> {
    return this.http.get<any>(`${this.url}retrieveAllinEtab/${idEtab}`);
  }
}
