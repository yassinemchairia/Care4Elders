import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MorgueService {
  url : string = 'http://localhost:8087/morgue/'; //nafs path mtee spring 


  constructor(private http: HttpClient) { }
  ajouterMorgue(morgue:any):Observable<any>{
    return this.http.post(this.url+"add-morgue",morgue)
  }
  affecterMorgueToEtabliss(morgue: any, idEtab: number): Observable<any> {
    return this.http.put<any>(this.url + "morgue/" + idEtab, morgue);
  }
  listeMorgue():Observable<any>{
    return this.http.get<any>(this.url+"retrieve-all-morgue")
  }
  supprimerMorgue(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"remove-morgue/"+id)
  }
  modifierMorgue(morgue:any):Observable<any>{
    return this.http.put<any>(this.url+"update-morgue",morgue)
  }
  getMorgue(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrieve-morgue/"+id)
  }


}
