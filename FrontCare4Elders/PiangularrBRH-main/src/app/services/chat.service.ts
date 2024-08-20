import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = 'http://localhost:8087/chat/'; // Assurez-vous de mettre à jour l'URL en fonction de votre backend

  constructor(private http: HttpClient) { }

  getAllMedecin(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}getAllMedecin`);
  }
}
