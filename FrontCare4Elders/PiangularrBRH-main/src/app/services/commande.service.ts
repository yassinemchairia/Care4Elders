import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private baseUrl = 'http://localhost:8087/Shop/'; // Assurez-vous de mettre à jour l'URL en fonction de votre backend
  private utilisationsRestantes: number= 0;
  constructor(private http: HttpClient) { }
  getUtilisationsRestantes(): number {
    return this.utilisationsRestantes;
  }

  // Méthode pour définir le nombre d'utilisations restantes
  setUtilisationsRestantes(utilisationsRestantes: number): void {
    this.utilisationsRestantes = utilisationsRestantes;
  }
  getTotalCommandesByDate(date: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total?date=${date}`);
  }
  getProduitLePlusRentable(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}produit/plus-rentable`);
  }
  getTotalCommandesByMonth(month: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}total/mois?month=${month}`);
  }

  getTotalCommandesByYear(year: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}total/annee?year=${year}`);
  }
  getCommandesEnAttente(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}en-attente`);
  }
  getCommandesByUserId(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}/commandes`);
  }
  getUtilisateurAvecPlusDeCommandes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}utilisateur/plus-de-commandes`);
  }
  retrieveAllCommandes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}retrieve-all-Commandes`);
  }

  changerStatutCommande(idCommande: number): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}${idCommande}/changer-statut`, {});
  }
  getCommandesEnAttente1(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}count/en-attente`);
  }

  getCommandesExpediees(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}count/expediees`);
  }
  
}
