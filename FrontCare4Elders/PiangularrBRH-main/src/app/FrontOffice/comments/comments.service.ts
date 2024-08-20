import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commantaire } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url : string = 'http://localhost:8087/commentaires/';

  constructor(private http: HttpClient) { }


  ajouterCommentaire(commentaire: any , evennementId: any, userId: any): Observable<any> {
    return this.http.post(`${this.url}evennement/${evennementId}/user/${userId}`, commentaire); // Mettez à jour l'URL de la requête
  }
  
 // listeComment(eventId:any):Observable<any>{
   // return this.http.get<any>(this.url+"event/"+eventId+"/comments")
 // }
  
 deleteCommentaire(commentId: any): Observable<any> {
  return this.http.delete(`${this.url}commentaire/${commentId}`);
}
  modifierComment(comment: Commantaire):Observable<any>{
    return this.http.put<any>(`${this.url}commentaire/${comment.id}`,comment)
  }
}
