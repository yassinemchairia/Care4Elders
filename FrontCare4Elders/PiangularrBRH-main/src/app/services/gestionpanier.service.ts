import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModePay } from 'src/app/FrontOffice/mode-pay.enum';
@Injectable({
  providedIn: 'root'
})
export class GestionpanierService {
  private baseUrl = 'http://localhost:8087/Shop/';

  constructor(private http: HttpClient) { }

  addProduitToPanier(idPanier: number, idProduit: number): Observable<any> {
    return this.http.post(`${this.baseUrl}${idPanier}/add-produitaupanier/${idProduit}`, {});
  }

  removeProduitFromPanier(idPanier: number, idProduit: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${idPanier}/remove-produit/${idProduit}`);
  }

  calculerMontantTotalPanier(idPanier: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}${idPanier}/total`);
  }

  mettreAJourMontantTotalPanier(idPanier: number, montantTotal: number): Observable<any> {
    return this.http.put(`${this.baseUrl}${idPanier}/update-total/${montantTotal}`, {});
  }

  mettreAJourQuantiteProduit(idPanier: number, idProduit: number, quantite: number): Observable<any> {
    return this.http.put(`${this.baseUrl}${idPanier}/update-quantity/${idProduit}/${quantite}`, {});
  }

  getProduitsDansPanier(idPanier: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${idPanier}/produits`);
  }
  checkProduitExistenceDansPanier(idPanier: number, idProduit: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}${idPanier}/produit-existe/${idProduit}`);
  }

  calculerNombreProduitsDansPanier(idPanier: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}${idPanier}/nombre-produits`);
  }
  updateNombreProduitsDansPanier(idPanier: number): Observable<any> {
    return this.http.put(`${this.baseUrl}${idPanier}/update-nombre-produits`, {});
}
checkPanierVide(idPanier: number): Observable<boolean> {
  return this.http.get<boolean>(`${this.baseUrl}${idPanier}/is-empty`);
}
ajouterCommande(idUtilisateur: number,idPanier: number, montantTotal: number, modePay: ModePay): Observable<any> {
  const body = { montantTotal, modePay };
  return this.http.post(`${this.baseUrl}${idUtilisateur}/${idPanier}/ajouter-commande`, body, {
    responseType: 'blob', // Indique que la réponse attendue est un blob (fichier)
    observe: 'response' // Indique que vous voulez observer la réponse complète (y compris les en-têtes)
  });
}

supprimerCommande(idCommande: number): Observable<any> {
  return this.http.delete<any>(`${this.baseUrl}commandes/${idCommande}`);
}
getProduitsFavorisByUserId(userId: number): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}${userId}/favoris`);
}

}
