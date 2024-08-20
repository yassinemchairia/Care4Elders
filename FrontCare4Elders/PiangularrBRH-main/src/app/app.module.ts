import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { MainBackComponent } from './BackOffice/main-back/main-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './FrontOffice/register/register.component';
import { WelcomComponent } from './FrontOffice/welcom/welcom.component'
import { LoginComponent } from './FrontOffice/login/login.component';
import { AdminComponent } from './FrontOffice/admin/admin.component';
import { UserComponent } from './FrontOffice/user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './serives/Auths-Last/auth.guard';
import { AuthInterceptor } from './serives/Auths-Last/auth.interceptor';
import { AuthenticationService } from './serives/authentication.service';
import { PasswordComponent } from './FrontOffice/password/password.component';
import { StatsComponent } from './BackOffice/stats/stats.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
import { calendarComponent } from './FrontOffice/shared/calendar/calendar.component';
import { AfiicheevennementfrontComponent } from './FrontOffice/afiicheevennementfront/afiicheevennementfront.component';
import { ModifierevennementComponent } from './BackOffice/modifierevennement/modifierevennement.component';
import { AjouterevennementComponent } from './BackOffice/ajouterevennement/ajouterevennement.component';
import { ListeEvennementComponent } from './BackOffice/liste-evennement/liste-evennement.component';
import { MapComponent } from './FrontOffice/shared/map/map.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { AfficheEtablissmentFrontComponent } from './FrontOffice/FrontOffice/affiche-etablissment-front/affiche-etablissment-front.component';
import { DetailEtablissementComponent } from './FrontOffice/FrontOffice/detail-etablissement/detail-etablissement.component';
import { AjouterAffctAmbulanceComponent } from './BackOffice/ajouter-affct-ambulance/ajouter-affct-ambulance.component';
import { ListeAmbulanceComponent } from './BackOffice/liste-ambulance/liste-ambulance.component';
import { DetailAmbulanceComponent } from './BackOffice/detail-ambulance/detail-ambulance.component';
import { UpdateAmbulanceComponent } from './BackOffice/update-ambulance/update-ambulance.component';
import { AjouterAmbulancierComponent } from './BackOffice/ajouter-ambulancier/ajouter-ambulancier.component';
import { ListeAmbulancierComponent } from './BackOffice/liste-ambulancier/liste-ambulancier.component';
import { UpdateAmbulancierComponent } from './BackOffice/update-ambulancier/update-ambulancier.component';
import { AjouterMorgueComponent } from './BackOffice/ajouter-morgue/ajouter-morgue.component';
import { ListeMorgueComponent } from './BackOffice/liste-morgue/liste-morgue.component';
import { UpdatemorgueComponent } from './BackOffice/updatemorgue/updatemorgue.component';
import { ModifierambulancierAmbulanceComponent } from './BackOffice/modifierambulancier-ambulance/modifierambulancier-ambulance.component';
import { MesfavorisComponent } from './FrontOffice/mesfavoris/mesfavoris.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import Chart from 'chart.js/auto';
import { LinearScale, CategoryScale, TimeScale, LogarithmicScale, RadialLinearScale } from 'chart.js';
import { AjoutProduitComponent } from './BackOffice/ajout-produit/ajout-produit/ajout-produit.component';
import { ListProduitComponent } from './BackOffice/list-produit/list-produit/list-produit.component';
import { ModifierproduitComponent } from './BackOffice/modifierproduit/modifierproduit/modifierproduit.component';



import { PanierComponent } from './FrontOffice/panier/panier.component';
import { AfficheProduitComponent } from './FrontOffice/affiche-produit/affiche-produit.component';
import { CommandeComponent } from './FrontOffice/commande/commande.component';

import { StatComponent } from './BackOffice/stat/stat.component';

import { ValidationComponent } from './BackOffice/validation/validation.component';
import { StatistiqueComponent } from './BackOffice/statistique/statistique.component';
import { AfficheMedicamentComponent } from './BackOffice/medicament/affiche-medicament/affiche-medicament.component';
import { AjouterMedicamentComponent } from './BackOffice/medicament/ajouter-medicament/ajouter-medicament.component';
import { ModifierMedicamentComponent } from './BackOffice/medicament/modifier-medicament/modifier-medicament.component';





import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { AffichePlatExisteComponent } from './FrontOffice/plat/affiche-plat-existe/affiche-plat-existe.component';
import { CardPlatComponent } from './FrontOffice/plat/affiche-plat-existe/card-plat/card-plat.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { NgToastModule } from 'ng-angular-popup' // to be added
import { AfficherRepasComponent } from './FrontOffice/Repas/afficher-repas/afficher-repas.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AlertComponent } from './FrontOffice/alert/alert.component';
import { AlertmedecinComponent } from './FrontOffice/alertmedecin/alertmedecin.component';
import { ListShelterComponent } from './BackOffice/list-shelter/list-shelter.component';
import { AjoutShelterComponent } from './BackOffice/ajout-shelter/ajout-shelter.component';
import { UpdateShelterComponent } from './BackOffice/update-shelter/update-shelter.component';
import { AfficheSheltersFrontComponent } from './FrontOffice/affiche-shelters-front/affiche-shelters-front.component';
import { ListAideComponent } from './BackOffice/list-aide/list-aide.component';
import { AjoutAideComponent } from './BackOffice/ajout-aide/ajout-aide.component';
import { UpdateAideComponent } from './BackOffice/update-aide/update-aide.component';
import { ListServiceShelterComponent } from './BackOffice/list-service-shelter/list-service-shelter.component';
import { AjoutServiceShelterComponent } from './BackOffice/ajout-service-shelter/ajout-service-shelter.component';
import { UpdateServiceShelterComponent } from './BackOffice/update-service-shelter/update-service-shelter.component';
import { AjoutAideDonateurComponent } from './FrontOffice/ajout-aide-donateur/ajout-aide-donateur.component';
import { ListDonateurAvecAideComponent } from './BackOffice/list-donateur-avec-aide/list-donateur-avec-aide.component';
import { AjoutAndAffectServiceToShelterComponent } from './BackOffice/ajout-and-affect-service-to-shelter/ajout-and-affect-service-to-shelter.component';
import { ServicesModalComponent } from './FrontOffice/services-modal/services-modal.component';
import { AfficheCauseComponent } from './FrontOffice/affiche-cause/affiche-cause.component';
import { AddCauseShelterComponent } from './BackOffice/add-cause-shelter/add-cause-shelter.component';
import { AfficheCauseBackComponent } from './BackOffice/affiche-cause-back/affiche-cause-back.component';
import { UpdateCauseComponent } from './BackOffice/update-cause/update-cause.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AfficheRestaurantComponent } from './BackOffice/restaurant/affiche-restaurant/affiche-restaurant.component';
import { AjouterRestaurantComponent } from './BackOffice/restaurant/ajouter-restaurant/ajouter-restaurant.component';
import { ModifierRestaurantComponent } from './BackOffice/restaurant/modifier-restaurant/modifier-restaurant.component';
import { AffichePlatComponent } from './BackOffice/Plat/affiche-plat/affiche-plat.component';
import { AjouterPlatComponent } from './BackOffice/Plat/ajouter-plat/ajouter-plat.component';
import { UpdatePlatComponent } from './BackOffice/Plat/update-plat/update-plat.component';
import { ListeFoodComponent } from './BackOffice/food/liste-food/liste-food.component';
import { AjouterFoodComponent } from './BackOffice/food/ajouter-food/ajouter-food.component';
import { ModifierFoodComponent } from './BackOffice/food/modifier-food/modifier-food.component';
import { ListRepasComponent } from './BackOffice/repas/list-repas/list-repas.component';
import { AjouterRepasComponent } from './BackOffice/repas/ajouter-repas/ajouter-repas.component';
import { ListeMaladieComponent } from './BackOffice/maladie/liste-maladie/liste-maladie.component';
import { AjouterMaladieComponent } from './BackOffice/maladie/ajouter-maladie/ajouter-maladie.component';
import { ModifierMaladieComponent } from './BackOffice/maladie/modifier-maladie/modifier-maladie.component';
import { AfficheCoungeComponent } from './BackOffice/Counge/affiche-counge/affiche-counge.component';
import { AfficheCoungeFrontComponent } from './FrontOffice/counge/affiche-counge-front/affiche-counge-front.component';
import { UpdateCoungeFrontComponent } from './FrontOffice/counge/update-counge-front/update-counge-front.component';
import { AjouterCoungeComponent } from './FrontOffice/counge/ajouter-counge/ajouter-counge.component';
import { ModifierCoungeComponent } from './BackOffice/Counge/modifier-counge/modifier-counge.component';
import { ListeMedecinComponent } from './BackOffice/liste-medecin/liste-medecin.component';
import { ListeinfermierComponent } from './BackOffice/listeinfermier/listeinfermier.component';
import { ListePatientComponent } from './BackOffice/liste-patient/liste-patient.component';
import { ListRdvsComponent } from './BackOffice/list-rdvs/list-rdvs.component';
import { ListePatientInAmbulanceComponent } from './BackOffice/liste-patient-in-ambulance/liste-patient-in-ambulance.component';
import { ListeDeathPatientComponent } from './BackOffice/liste-death-patient/liste-death-patient.component';
import { AfficherMedecinsComponent } from './FrontOffice/FrontOffice/afficher-medecins/afficher-medecins.component';
import { FrontQrPatienMorgueComponent } from './FrontOffice/FrontOffice/front-qr-patien-morgue/front-qr-patien-morgue.component';
import { ListRdvMedecinComponent } from './FrontOffice/FrontOffice/list-rdv-medecin/list-rdv-medecin.component';
import { ListePatientParInfEtabComponent } from './FrontOffice/FrontOffice/liste-patient-par-inf-etab/liste-patient-par-inf-etab.component';
import { ModifierPatEtabComponent } from './FrontOffice/FrontOffice/modifier-pat-etab/modifier-pat-etab.component';
import { RdvComponent } from './FrontOffice/FrontOffice/rdv/rdv.component';
import { SuiviePatientEtabComponent } from './FrontOffice/FrontOffice/suivie-patient-etab/suivie-patient-etab.component';
import { UpdateRdvByMEdecinComponent } from './FrontOffice/FrontOffice/update-rdv-by-medecin/update-rdv-by-medecin.component';
import { EvennementGraphiqueComponent } from './BackOffice/evennement-graphique/evennement-graphique.component';
import { EventDetailsComponent } from './FrontOffice/event-details/event-details.component';
import { ActivityQualityChartsComponent } from './BackOffice/activity-quality-charts/activity-quality-charts.component';
import { ListActivityComponent } from './BackOffice/activity/list-activity/list-activity.component';
import { UpdateActivityComponent } from './BackOffice/activity/update-activity/update-activity.component';
import { AddActivityComponent } from './BackOffice/activity/add-activity/add-activity.component';
import { AddActivityOrganisateurComponent } from './FrontOffice/activityFront/organisateur/add-activity-organisateur/add-activity-organisateur.component';
import { ListActivityPatientComponent } from './FrontOffice/activityFront/patient/list-activity-patient/list-activity-patient.component';
import { ListFavoriPatientComponent } from './FrontOffice/activityFront/patient/list-favori-patient/list-favori-patient.component';
import { RatingsAndBadgeComponent } from './BackOffice/activity/ratings-and-badge/ratings-and-badge.component';
import { OrganisateurActivitiesComponent } from './FrontOffice/activityFront/organisateur/organisateur-activities/organisateur-activities.component';
import { YourActivityPatientComponent } from './FrontOffice/activityFront/patient/your-activity-patient/your-activity-patient.component';
import { ListPresenceComponent } from './FrontOffice/attendance/list-presence/list-presence.component';
import { PresenceCalenderComponent } from './FrontOffice/shared/presence-calender/presence-calender.component';
import { Top3MedicamentComponent } from './BackOffice/top3-medicament/top3-medicament.component';
import { ChatLtifiComponent } from './BackOffice/chat-ltifi/chat-ltifi.component';
import { AficheLesOrdenanceByRDVComponent } from './FrontOffice/afiche-les-ordenance-by-rdv/afiche-les-ordenance-by-rdv.component';
import { UpdateOrdenanceComponent } from './FrontOffice/Ordenance/update-ordenance/update-ordenance.component';
import { MatCardModule } from '@angular/material/card';
import { AjouterOrdenanceComponent } from './FrontOffice/Ordenance/ajouter-ordenance/ajouter-ordenance.component';
import { ListOrdenanceComponent } from './FrontOffice/Ordenance/list-ordenance/list-ordenance.component';
import { AdminMedecinAlertComponent } from './BackOffice/admin-medecin-alert/admin-medecin-alert.component';
import { AlertChartComponentComponent } from './BackOffice/alert-chart-component/alert-chart-component.component';
import { StatEventByUserComponent } from './BackOffice/stat-event-by-user/stat-event-by-user.component';
import { AverageParticipantsComponent } from './BackOffice/average-participants/average-participants.component';
import { ListeCommentByEventComponent } from './BackOffice/liste-comment-by-event/liste-comment-by-event.component';
import { BrhStastsGenreComponent } from './BackOffice/brh-stasts-genre/brh-stasts-genre.component';
import { StatsBrahmiComponent } from './BackOffice/stats-brahmi/stats-brahmi.component';
import { AjouterreponsereclamationretardComponent } from './BackOffice/ajouterreponsereclamationretard/ajouterreponsereclamationretard.component';
import { AjouterreponsereclamationComponent } from './BackOffice/ajouterreponsereclamation/ajouterreponsereclamation.component';
import { GestionreclamationComponent } from './BackOffice/gestionreclamation/gestionreclamation.component';
import { ListreclamationnonrepondueComponent } from './BackOffice/listreclamationnonrepondue/listreclamationnonrepondue.component';
import { ProduitbeneficesComponent } from './BackOffice/produitbenefices/produitbenefices.component';
import { StatistiquereclamationComponent } from './BackOffice/statistiquereclamation/statistiquereclamation.component';
import { AjouterreclamationComponent } from './FrontOffice/ajouterreclamation/ajouterreclamation.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    MainBackComponent,
    SidebarBackComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HomeFrontComponent,
    LoginComponent,
    RegisterComponent,
    AjoutProduitComponent,
    ListProduitComponent,
    ModifierproduitComponent,
    
    PanierComponent,
    AfficheProduitComponent,
    CommandeComponent,
    ValidationComponent,
    StatistiqueComponent,
    MesfavorisComponent,
    StatComponent,
    WelcomComponent,
    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    PasswordComponent,
    StatsComponent,
    AllTempleteFrontComponent,
    ListeEvennementComponent,
    AjouterevennementComponent,
    ModifierevennementComponent,
    AfiicheevennementfrontComponent,
    calendarComponent,
  
    MapComponent,
    AjouterEtablissementComponent,
    ListeetablissementComponent,
    ModifieretablissementComponent,
    AfficheEtablissmentFrontComponent,
    DetailEtablissementComponent,
    AjouterAffctAmbulanceComponent,
    ListeAmbulanceComponent,
    DetailAmbulanceComponent,
    UpdateAmbulanceComponent,
    AjouterAmbulancierComponent,
    ListeAmbulancierComponent,
    UpdateAmbulancierComponent,
    AjouterMorgueComponent,
    ListeMorgueComponent,
    UpdatemorgueComponent,
    ModifierambulancierAmbulanceComponent,
    AfficheMedicamentComponent,
    AjouterMedicamentComponent,
    ModifierMedicamentComponent,
    AfficheRestaurantComponent,
    AjouterRestaurantComponent,
    ModifierRestaurantComponent,
    AffichePlatComponent,
    AjouterPlatComponent,
    UpdatePlatComponent,
    ListeFoodComponent,
    AjouterFoodComponent,
    ModifierFoodComponent,
    ListRepasComponent,
    AjouterRepasComponent,
    ListeMaladieComponent,
    AjouterMaladieComponent,
    ModifierMaladieComponent,
    AffichePlatExisteComponent,
    CardPlatComponent,
    AfficheCoungeComponent,
    AfficheCoungeFrontComponent,
    UpdateCoungeFrontComponent,
    AjouterCoungeComponent,
    ModifierCoungeComponent,
    AfficherRepasComponent,
    AlertComponent,
    AlertmedecinComponent,
    ListShelterComponent,
    AjoutShelterComponent,
    UpdateShelterComponent,
    AfficheSheltersFrontComponent,
    ListAideComponent,
    AjoutAideComponent,
    UpdateAideComponent,
    ListServiceShelterComponent,
    AjoutServiceShelterComponent,
    UpdateServiceShelterComponent,
    AjoutAideDonateurComponent,
    ListDonateurAvecAideComponent,
    AjoutAndAffectServiceToShelterComponent,
    ServicesModalComponent,
    AfficheCauseComponent,
    AddCauseShelterComponent,
    AfficheCauseBackComponent,
    UpdateCauseComponent,
    ListeMedecinComponent,
    ListeinfermierComponent,
    ListePatientComponent,
    ListRdvsComponent,
    ListePatientInAmbulanceComponent,
    ListeDeathPatientComponent,
    AfficherMedecinsComponent,
    FrontQrPatienMorgueComponent,
    ListRdvMedecinComponent,
    ListePatientParInfEtabComponent,
    ModifierPatEtabComponent,
    RdvComponent,
    SuiviePatientEtabComponent,
    UpdateRdvByMEdecinComponent,
    EvennementGraphiqueComponent,
    EventDetailsComponent,
    ActivityQualityChartsComponent,
    ListActivityComponent,
    UpdateActivityComponent,
    AddActivityComponent,
    AddActivityOrganisateurComponent,
    ListActivityPatientComponent,
    ListFavoriPatientComponent,
    RatingsAndBadgeComponent,
    OrganisateurActivitiesComponent,
    YourActivityPatientComponent,
    ListPresenceComponent,
    PresenceCalenderComponent,
    AficheLesOrdenanceByRDVComponent,
    Top3MedicamentComponent,
    ChatLtifiComponent,

    AffichePlatExisteComponent,
    UpdateCoungeFrontComponent,
    UpdateOrdenanceComponent,
    AjouterOrdenanceComponent,
    ListOrdenanceComponent,
    AdminMedecinAlertComponent,
    AlertChartComponentComponent,
    AverageParticipantsComponent,
    ListeCommentByEventComponent,
    StatEventByUserComponent,
    BrhStastsGenreComponent,
    StatsBrahmiComponent,
    AjouterreponsereclamationretardComponent,
    AjouterreponsereclamationComponent,
    GestionreclamationComponent,
    ListreclamationnonrepondueComponent,
    ProduitbeneficesComponent,
    StatistiquereclamationComponent,
    AjouterreclamationComponent,

    

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgxMapLibreGLModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
    NgxPaginationModule,
    NgToastModule,
    MatTabsModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    MatCardModule

  ],
  providers: [
    AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
    },
    HttpClient,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {constructor() {
  // Enregistrement des échelles
  Chart.register(LinearScale, CategoryScale, TimeScale, LogarithmicScale, RadialLinearScale);
} }
