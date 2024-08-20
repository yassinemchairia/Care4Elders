import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url : string = 'http://localhost:8087/Shop';
  constructor(private http: HttpClient) { }
  
  supprimerProduitDesFavoris(idUtilisateur: number, idProduit: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${idUtilisateur}/defavoris/${idProduit}`);
  }

  getProduitsFavoris(idUtilisateur: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${idUtilisateur}/favoris`);
  }
  ajouterProduit(produit:any):Observable<any>{
    return this.http.post(this.url+"/add-produit",produit)
  }
  listeProduit(){
    return this.http.get(this.url+"/retrieve-all-Produits")
  }
  supprimerProduit(idProduit:any):Observable<any>{
    return this.http.delete<any>(this.url+"/remove-produit/"+idProduit)
  }
  modifierProduit(produit:any):Observable<any>{
    return this.http.put<any>(this.url+"/update-produit",produit)
  }
  getProduit(idProduit:any):Observable<any>{
    return this.http.get<any>(this.url+"/retrieve-produit/"+idProduit)
  }
  trierProduitsParPrix(sortOrder: string): Observable<any> {
    return this.http.get<any>(`${this.url}/sorted-by-price?sortOrder=${sortOrder}`);
  }
  getProduitsAvecBenefices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/produits/benefices`);
  }
  ajouterProduitAuxFavoris(idUtilisateur: number, idProduit: number): Observable<any> {
    return this.http.post<any>(`${this.url}/${idUtilisateur}/favoris/${idProduit}`, {});
  }
  rechercherProduitsParNom(nomproduit: string): Observable<any> {
    return this.http.get<any>(`${this.url}/search?nom=${nomproduit}`);
  }
  getProduitLePlusCommande(): Observable<any> {
    return this.http.get<any>(`${this.url}/produit/plus-commande`);
  }
}
