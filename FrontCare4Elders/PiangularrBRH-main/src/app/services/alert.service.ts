import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Body } from 'twilio/lib/twiml/MessagingResponse';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private http : HttpClient) { }
  private url ='http://127.0.0.1:8087/' ;
  


  AlertPatient(idpatient:number ){
    const body = {}; // Define your request body if needed, currently empty
    return this.http.post(this.url + 'alert/patientcreate/' +idpatient,body);
  }
  
  getAlertByMedecin(idMedecin:number ){
    const body = {}; // Define your request body if needed, currently empty
    return this.http.get(this.url + 'alert/getalert/' +idMedecin,body);
  }
  accteptermedecin(idMedecin:number,cc:number ){
   
    const body = { accepted: true };

    // Modifier l'URL en utilisant les variables idMedecin et idAlert
    const url = `http://127.0.0.1:8087/alert/accept/${idMedecin}/${cc}`;

    // Envoyer la requête PUT avec le corps de la requête
    return this.http.put(url, body);
    // const body = {}; 
    // return this.http.put('http://127.0.0.1:8087/alert/accept/'+idMedecin+'/'+idalert ,body);
  }
  
  getAlertsPerMedecin(): Observable<any> {
    return this.http.get<any>(this.url+'alert/count-per-medecin');
  }
  envoyermail(idMedecin:number ){
    const body = {}; // Define your request body if needed, currently empty
    return this.http.post(this.url + 'alert/medecinevoueymail/' +idMedecin,body);
  }
}
