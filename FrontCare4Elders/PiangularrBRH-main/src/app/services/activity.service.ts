import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http : HttpClient) { }
  private url ='http://127.0.0.1:8087/' ;

  getQualityTrend(){
    return this.http.get(this.url +'Activity/qualityTrend');
  }
  getAllActivity(){
    return this.http.get(this.url+'Activity/allActivity');
  }
  deleteActivity(id:number){
    return this.http.delete(this.url +'Activity/RemoveActivity/' + id);
  }
  updateActivity(activity:any){
    return this.http.put(this.url + 'Activity/UpdateActivity' ,activity);

  }
  getActivityById(id:number){
    return this.http.get(this.url + 'Activity/Activity/' + id);
  }
  accepterActivite(idActivite: number): Observable<any> {
    return this.http.post<any>(this.url + 'Activity/accepter/' + idActivite, {});
  }

  refuserActivite(idActivite: number): Observable<any> {
    return this.http.post<any>(this.url + 'Activity/refuser/' + idActivite, {});
  }

  registerOrganisateurToActivity(activity: any, idOrganisateur: number): Observable<any> {

    return this.http.post<any>(this.url+ 'Activity/register/'+ idOrganisateur , activity);
  }
  getActivitiesByEtat(etat: any): Observable<any> {
    return this.http.get<any>(`${this.url}Activity/activitiesByEtat/${etat}`);
  }
  registerPatientToEvent(idActivity: number, idPatient: number): Observable<any> {
    return this.http.post<any>(`${this.url}Activity/${idActivity}/${idPatient}`, {});
  }
  addActivityToFavoris(idPatient: number, idActivity: number): Observable<any> {
    const url = `${this.url}Activity/favoris/${idPatient}/${idActivity}`;
    return this.http.post<any>(url, {});
  }

  // Retirer une activité des favoris
  removeActivityFromFavoris(idPatient: number, idActivity: number): Observable<any> {
    const url = `${this.url}Activity/defavoris/${idPatient}/${idActivity}`;
    return this.http.delete<any>(url);
  }

  // Récupérer la liste des activités favorites d'un patient
  getActivitiesFavorisByPatientId(idPatient: number): Observable<any[]> {
    const url = `${this.url}Activity/listFavorie/idActivity/${idPatient}`;
    return this.http.get<any[]>(url);
  }

  // Réagir à une activité (like, dislike, etc.)
  reactToActivity(activityId: number, patientId: number, reactionType: string): Observable<any> {
    const url = `${this.url}Activity/react/${activityId}/${patientId}?reaction=${reactionType}`;
    return this.http.post<any>(url, {});
  }

  // Obtenir le nombre de likes d'une activité
  getNumberOfLikesOfActivity(idActivity: number): Observable<number> {
    const url = `${this.url}Activity/nbrPostlikes/${idActivity}`;
    return this.http.get<number>(url);
  }

  // Obtenir le nombre de dislikes d'une activité
  getNumberOfDislikesOfActivity(idActivity: number): Observable<number> {
    const url = `${this.url}Activity/nbrPostDislikes/${idActivity}`;
    return this.http.get<number>(url);
  }
  getOrga(id: number): Observable<number> {
    const url = `${this.url}Activity/getOrga/${id}`;
    return this.http.get<number>(url);
  }

  getRatingsAndBadges(): Observable<any> {
    const url = `${this.url}Activity/ratingsAndBadges`;
    return this.http.get<any>(url);
  }
  getActivitiesForOrganisateur(organisateurId: number): Observable<any> {
    const url = `${this.url}Activity/getactOrga/${organisateurId}`;
    return this.http.get<any>(url);
  }
  getActivitiesForPatient(patientId: number): Observable<any> {
    const url = `${this.url}Activity/getactPatient/${patientId}`;
    return this.http.get<any>(url);
  }
}
