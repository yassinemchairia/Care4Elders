import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenanceService {


  url : string = 'http://localhost:8087/ordenance/';

  constructor(private http: HttpClient) { }

  ajouterOrdenance(pt:any,id:number):Observable<any>{
    return this.http.post(this.url+"add/"+id,pt)
  }
  addOrdDTO(pt:any,id:number):Observable<any>{
    return this.http.post(this.url+"addOrdDTO/"+id,pt)
  }
  listeOrdenances():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_Ord")
  }
  listePatients():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_patient")
  }
  supprimerOrdenance(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_ord/"+id);
    
  }
  modifierOrdenance(maladies:any):Observable<any>{
    return this.http.put<any>(this.url+"update_ord",maladies)
  }

  getOrdenance(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_ord/"+id)
  }
  getOrdenanceByMedecin(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_Ord/"+id)
  }
  getOrdonnancesByPatient(id:any):Observable<any>{
    return this.http.get<any>(this.url+"getOrdonnancesByPatient/"+id)
  }
  getProchainRendezVousDuMedecin(id:any):Observable<any>{
    return this.http.get<any>(this.url+"getProchainRendezVousDuMedecin/"+id)
  }
  getRendezVousDuMedecin(id:any):Observable<any>{
    return this.http.get<any>(this.url+"getRendezVousDuMedecin/"+id)
  }



}
