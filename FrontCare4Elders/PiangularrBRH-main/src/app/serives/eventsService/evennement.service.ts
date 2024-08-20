import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvennementService {
  uploadImage(selectedImageFile: File) {
    throw new Error('Method not implemented.');
  }

  
  private url = 'http://localhost:8087/';
  private urlC = 'http://localhost:8087/commentaires/';

  constructor(private http: HttpClient) { }

  registerUserToEvent(eventId: number, userId: number): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.url}evennements/${eventId}/register/${userId}`, {}, {observe: 'response'})
  }

  verifierDateOccupee(date: string): Observable<boolean> {
    // Convertir la date en format "yyyy-MM-dd"
    const formattedDate = new Date(date).toISOString().split('T')[0];

    return this.http.get<boolean>(`${this.url}evennements/verifierDateOccupee/${formattedDate}`)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 400 && error.error === 'Date occupée') {
                    return throwError('Date occupée');
                } else if (error.status === 404) {
                    return throwError('Date non trouvée');
                }
                return throwError('Erreur inconnue');
            })
        );
}




  getEvennementByDate(date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}evennements/date/${date}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError('Not found');
        }
        return throwError('Something went wrong');
      })
    );
  }

  ajouterEvennement(evennement: any) {
    return this.http.post(`${this.url}evennements/ajouterevent`, evennement);
  }

  getAllEvennements(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}evennements/allevent`);
  }

  supprimerEvennement(id: number): Observable<any> {
    return this.http.delete(`${this.url}evennements/${id}`);
  }

  
  supprimerComment(id: number): Observable<any> {
    return this.http.delete(`${this.urlC}commentaire/${id}`);
  }
  

  getEvennementById(id: number): Observable<any> {
    return this.http.get(`${this.url}evennements/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError('Not found');
        }
        return throwError('Something went wrong');
      })
    );
  }

  mettreAJourEvennement(evennement: any): Observable<any> {
    // Convertir la date en format "yyyy-MM-dd"
    const formattedDate = new Date(evennement.date).toISOString().split('T')[0];

    return this.http.put(`${this.url}evennements/updateevent`, { ...evennement, date: formattedDate })
        .pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 400 && error.error === 'Date occupée') {
                    return throwError('Date occupée');
                } else if (error.status === 404) {
                    return throwError('Evennement non trouvé');
                } else if (error.status === 400) {
                    return throwError('Erreur de validation');
                }
                return throwError('Erreur inconnue');
            })
        );
}
getCommentsForEvent(eventId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.url}commentaires/evennement/${eventId}`).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
        return throwError('Not found');
      }
      return throwError('Something went wrong');
    })
  );
}
getUsersNamesByEvent(eventId: number): Observable<string[]> {
  return this.http.get<string[]>(`${this.url}evennements/${eventId}/users`).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
        return throwError('Not found');
      }
      return throwError('Something went wrong');
    })
  );
}

}
