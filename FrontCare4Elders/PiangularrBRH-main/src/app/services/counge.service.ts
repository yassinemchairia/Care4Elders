import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoungeService {

  url : string = 'http://localhost:8087/counge/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    responseType: 'text'
  };
  constructor(private http: HttpClient) { }

  ajouterCounge(counge:any):Observable<any>{
    return this.http.post(this.url+"add",counge)
  }
 
  // demandeCounge(id:any,counge:any):Observable<any>{
  //   return this.http.post(this.url+"DemandeCoungeCuisine/"+id,counge)
  // }
  
  demandeCounge(id: any, counge: any): Observable<any> {
    return this.http.post(`${this.url}DemandeCoungeCuisine/${id}`, counge)
  }
private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = error.error.message;
    } else {
        // Server-side errors
        errorMessage = error.error; // Assuming server sends error message directly
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}
  listeCounge():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_counge")
  }
  listeCoungeF(id:number):Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_coungeF/"+id)
  }
  getNumberOfCongesForDate():Observable<any>{
    return this.http.get<any>(this.url+"getNumberOfCongesForDate")
  }

  
  supprimerCounge(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_counge/"+id)
  }
  modifierCounge(id: number, counge: any): Observable<any> {
    return this.http.put<any>(`${this.url}update_counge/${id}`, counge);
  }
  
  updateCoungeEtat(id: number, newEtat: string): Observable<any> {
    const url = `${this.url}${id}/etat`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' // Spécifiez que le type de contenu est JSON
      })
    };
    return this.http.put(url, JSON.stringify(newEtat), httpOptions); // Convertir newEtat en JSON avant de l'envoyer
  }
  // modifierCounge(etab:any):Observable<any>{
  //   return this.http.put<any>(this.url+"update_counge",etab)
  // }
  getCounge(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_counge/"+id)
  }

 


}
