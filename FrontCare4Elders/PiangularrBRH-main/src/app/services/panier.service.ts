import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private nombreTotalProduitsSubject = new BehaviorSubject<number>(0);
  nombreTotalProduits$ = this.nombreTotalProduitsSubject.asObservable();

  constructor() {}

  // Méthode pour mettre à jour le nombre total de produits dans le panier
  mettreAJourNombreTotalProduits(nombre: number): void {
    this.nombreTotalProduitsSubject.next(nombre);
  }
}