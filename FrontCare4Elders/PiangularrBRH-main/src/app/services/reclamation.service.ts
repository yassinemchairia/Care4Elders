import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  url : string = 'http://localhost:8087/Shop';
  typesReclamation: string[] = ['SERVICE', 'QUALITE_PRODUIT', 'LIVRAISON', 'FACTURATION', 'RETOUR', 'AUTRE'];
  constructor(private http: HttpClient) { }
  
  getAllReclamationsdetopusers(): Observable<any> {
    return this.http.get<any>(`${this.url}/top-two-users`);
  }
  getReclamationsByUserId(userId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/fff/reclamations/${userId}`);
  }
  
  getReclamationsByUserId11(userId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/users/${userId}/reclamations`);
  }
  getAllTypesReclamation(): Observable<string[]> {
    // Retourne la liste des types de réclamation
    return of(this.typesReclamation);
  }
  getTotalReclamationsByDate(date: string): Observable<any> {
    return this.http.get<any>(`${this.url}/reclamations/total-by-date?date=${date}`);
  }

  
  getAllReclamations(): Observable<any> {
    return this.http.get<any>(`${this.url}/reclamations`);
  }
 
  ajouterReclamation(id: number, reclamation: any): Observable<any> {
    return this.http.post<any>(`${this.url}/${id}/add-reclamation`, reclamation);
  }

  supprimerReclamation(idReclamation: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/supprimer_reclamation/${idReclamation}`);
  }
  
  getReclamationsByType(type: string): Observable<any> {
    return this.http.get<any>(`${this.url}/type/${type}`);
  }
  getAllReclamationsSortedByImportance(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/reclamations/sorted`);
  }
  checkReclamationAnswered(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/reclamationEstRepondue/${id}`);
  }
  ajouterReponseAReclamation(idReclamation: number, reponse: any): Observable<any> {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.url}/reponse/${idReclamation}`, JSON.stringify(reponse),httpOptions);
  }
  verifierReclamationsNonReponduesDepuisDeuxJours(): Observable<any> {
    return this.http.get<any>(`${this.url}/verifierNonRepondues`);
  }
}
