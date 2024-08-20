import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { ForbiddenComponent } from './FrontOffice/forbidden/forbidden.component';
import { AuthGuard } from './serives/Auths-Last/auth.guard';
import { UserComponent } from './FrontOffice/user/user.component';
import { StatsComponent } from './BackOffice/stats/stats.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
import { AfiicheevennementfrontComponent } from './FrontOffice/afiicheevennementfront/afiicheevennementfront.component';
import { MapComponent } from './FrontOffice/shared/map/map.component';
import { calendarComponent } from './FrontOffice/shared/calendar/calendar.component';
import { EventDetailsComponent } from './FrontOffice/event-details/event-details.component';

import { ModifierevennementComponent } from './BackOffice/modifierevennement/modifierevennement.component';
import { ListeEvennementComponent } from './BackOffice/liste-evennement/liste-evennement.component';
import { AjouterevennementComponent } from './BackOffice/ajouterevennement/ajouterevennement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { ListeAmbulanceComponent } from './BackOffice/liste-ambulance/liste-ambulance.component';
import { AjouterAffctAmbulanceComponent } from './BackOffice/ajouter-affct-ambulance/ajouter-affct-ambulance.component';
import { AjouterMorgueComponent } from './BackOffice/ajouter-morgue/ajouter-morgue.component';
import { ListeMorgueComponent } from './BackOffice/liste-morgue/liste-morgue.component';
import { UpdatemorgueComponent } from './BackOffice/updatemorgue/updatemorgue.component';
import { DetailAmbulanceComponent } from './BackOffice/detail-ambulance/detail-ambulance.component';
import { UpdateAmbulanceComponent } from './BackOffice/update-ambulance/update-ambulance.component';
import { AjouterAmbulancierComponent } from './BackOffice/ajouter-ambulancier/ajouter-ambulancier.component';
import { UpdateAmbulancierComponent } from './BackOffice/update-ambulancier/update-ambulancier.component';
import { ListeAmbulancierComponent } from './BackOffice/liste-ambulancier/liste-ambulancier.component';
import { ModifierambulancierAmbulanceComponent } from './BackOffice/modifierambulancier-ambulance/modifierambulancier-ambulance.component';
import { AfficheEtablissmentFrontComponent } from './FrontOffice/FrontOffice/affiche-etablissment-front/affiche-etablissment-front.component';
import { DetailEtablissementComponent } from './FrontOffice/FrontOffice/detail-etablissement/detail-etablissement.component';
import { PanierComponent } from './FrontOffice/panier/panier.component';
import { AfficheProduitComponent } from './FrontOffice/affiche-produit/affiche-produit.component';
import { CommandeComponent } from './FrontOffice/commande/commande.component';
import { ValidationComponent } from './BackOffice/validation/validation.component';
import { StatistiqueComponent } from './BackOffice/statistique/statistique.component';
import { MesfavorisComponent } from './FrontOffice/mesfavoris/mesfavoris.component';
import { StatComponent } from './BackOffice/stat/stat.component';
import { AjoutProduitComponent } from './BackOffice/ajout-produit/ajout-produit/ajout-produit.component';
import { ListProduitComponent } from './BackOffice/list-produit/list-produit/list-produit.component';
import { ModifierproduitComponent } from './BackOffice/modifierproduit/modifierproduit/modifierproduit.component';
import { AfficheMedicamentComponent } from './BackOffice/medicament/affiche-medicament/affiche-medicament.component';
import { AjouterMedicamentComponent } from './BackOffice/medicament/ajouter-medicament/ajouter-medicament.component';
import { ModifierMedicamentComponent } from './BackOffice/medicament/modifier-medicament/modifier-medicament.component';
import { ModifierRestaurantComponent } from './BackOffice/restaurant/modifier-restaurant/modifier-restaurant.component';

import { ListRepasComponent } from './BackOffice/repas/list-repas/list-repas.component';

import { AjouterRepasComponent } from './BackOffice/repas/ajouter-repas/ajouter-repas.component';
import { AfficheCoungeComponent } from './BackOffice/Counge/affiche-counge/affiche-counge.component';
import { ModifierCoungeComponent } from './BackOffice/Counge/modifier-counge/modifier-counge.component';
import { AffichePlatExisteComponent } from './FrontOffice/plat/affiche-plat-existe/affiche-plat-existe.component';
import { AfficherRepasComponent } from './FrontOffice/Repas/afficher-repas/afficher-repas.component';
import { AlertComponent } from './FrontOffice/alert/alert.component';
import { AlertmedecinComponent } from './FrontOffice/alertmedecin/alertmedecin.component';
import { AfficheSheltersFrontComponent } from './FrontOffice/affiche-shelters-front/affiche-shelters-front.component';
import { AjoutAideDonateurComponent } from './FrontOffice/ajout-aide-donateur/ajout-aide-donateur.component';
import { AfficheCauseComponent } from './FrontOffice/affiche-cause/affiche-cause.component';
import { ListShelterComponent } from './BackOffice/list-shelter/list-shelter.component';
import { AjoutShelterComponent } from './BackOffice/ajout-shelter/ajout-shelter.component';
import { UpdateShelterComponent } from './BackOffice/update-shelter/update-shelter.component';
import { AjoutAideComponent } from './BackOffice/ajout-aide/ajout-aide.component';
import { ListAideComponent } from './BackOffice/list-aide/list-aide.component';
import { UpdateAideComponent } from './BackOffice/update-aide/update-aide.component';
import { AjoutServiceShelterComponent } from './BackOffice/ajout-service-shelter/ajout-service-shelter.component';
import { AjoutAndAffectServiceToShelterComponent } from './BackOffice/ajout-and-affect-service-to-shelter/ajout-and-affect-service-to-shelter.component';
import { ListServiceShelterComponent } from './BackOffice/list-service-shelter/list-service-shelter.component';
import { UpdateServiceShelterComponent } from './BackOffice/update-service-shelter/update-service-shelter.component';
import { ListDonateurAvecAideComponent } from './BackOffice/list-donateur-avec-aide/list-donateur-avec-aide.component';
import { AddCauseShelterComponent } from './BackOffice/add-cause-shelter/add-cause-shelter.component';
import { AfficheCauseBackComponent } from './BackOffice/affiche-cause-back/affiche-cause-back.component';
import { UpdateCauseComponent } from './BackOffice/update-cause/update-cause.component';
import { StatBadgeComponent } from './BackOffice/stat-badge/stat-badge.component';
import { AjouterCoungeComponent } from './FrontOffice/counge/ajouter-counge/ajouter-counge.component';
import { AfficheCoungeFrontComponent } from './FrontOffice/counge/affiche-counge-front/affiche-counge-front.component';
import { UpdateCoungeFrontComponent } from './FrontOffice/counge/update-counge-front/update-counge-front.component';
import { AfficheRestaurantComponent } from './BackOffice/restaurant/affiche-restaurant/affiche-restaurant.component';
import { AjouterRestaurantComponent } from './BackOffice/restaurant/ajouter-restaurant/ajouter-restaurant.component';
import { AffichePlatComponent } from './BackOffice/Plat/affiche-plat/affiche-plat.component';
import { AjouterPlatComponent } from './BackOffice/Plat/ajouter-plat/ajouter-plat.component';
import { UpdatePlatComponent } from './BackOffice/Plat/update-plat/update-plat.component';
import { AjouterFoodComponent } from './BackOffice/food/ajouter-food/ajouter-food.component';
import { ListeFoodComponent } from './BackOffice/food/liste-food/liste-food.component';
import { ModifierFoodComponent } from './BackOffice/food/modifier-food/modifier-food.component';
import { ListeMaladieComponent } from './BackOffice/maladie/liste-maladie/liste-maladie.component';
import { AjouterMaladieComponent } from './BackOffice/maladie/ajouter-maladie/ajouter-maladie.component';
import { ModifierMaladieComponent } from './BackOffice/maladie/modifier-maladie/modifier-maladie.component';
import { ListeMedecinComponent } from './BackOffice/liste-medecin/liste-medecin.component';
import { ListeinfermierComponent } from './BackOffice/listeinfermier/listeinfermier.component';
import { ListePatientComponent } from './BackOffice/liste-patient/liste-patient.component';
import { ListRdvsComponent } from './BackOffice/list-rdvs/list-rdvs.component';
import { ListePatientInAmbulanceComponent } from './BackOffice/liste-patient-in-ambulance/liste-patient-in-ambulance.component';
import { ListeDeathPatientComponent } from './BackOffice/liste-death-patient/liste-death-patient.component';
import { AfficherMedecinsComponent } from './FrontOffice/FrontOffice/afficher-medecins/afficher-medecins.component';
import { RdvComponent } from './FrontOffice/FrontOffice/rdv/rdv.component';
import { ListRdvMedecinComponent } from './FrontOffice/FrontOffice/list-rdv-medecin/list-rdv-medecin.component';
import { UpdateRdvByMEdecinComponent } from './FrontOffice/FrontOffice/update-rdv-by-medecin/update-rdv-by-medecin.component';
import { SuiviePatientEtabComponent } from './FrontOffice/FrontOffice/suivie-patient-etab/suivie-patient-etab.component';
import { ListePatientParInfEtabComponent } from './FrontOffice/FrontOffice/liste-patient-par-inf-etab/liste-patient-par-inf-etab.component';
import { ModifierPatEtabComponent } from './FrontOffice/FrontOffice/modifier-pat-etab/modifier-pat-etab.component';
import { FrontQrPatienMorgueComponent } from './FrontOffice/FrontOffice/front-qr-patien-morgue/front-qr-patien-morgue.component';
import { ActivityQualityChartsComponent } from './BackOffice/activity-quality-charts/activity-quality-charts.component';
import { ListActivityComponent } from './BackOffice/activity/list-activity/list-activity.component';
import { UpdateActivityComponent } from './BackOffice/activity/update-activity/update-activity.component';
import { RatingsAndBadgeComponent } from './BackOffice/activity/ratings-and-badge/ratings-and-badge.component';
import { ListActivityPatientComponent } from './FrontOffice/activityFront/patient/list-activity-patient/list-activity-patient.component';
import { AddActivityOrganisateurComponent } from './FrontOffice/activityFront/organisateur/add-activity-organisateur/add-activity-organisateur.component';
import { ListFavoriPatientComponent } from './FrontOffice/activityFront/patient/list-favori-patient/list-favori-patient.component';
import { OrganisateurActivitiesComponent } from './FrontOffice/activityFront/organisateur/organisateur-activities/organisateur-activities.component';
import { YourActivityPatientComponent } from './FrontOffice/activityFront/patient/your-activity-patient/your-activity-patient.component';
import { AficheLesOrdenanceByRDVComponent } from './FrontOffice/afiche-les-ordenance-by-rdv/afiche-les-ordenance-by-rdv.component';
import { Top3MedicamentComponent } from './BackOffice/top3-medicament/top3-medicament.component';
import { ChatLtifiComponent } from './BackOffice/chat-ltifi/chat-ltifi.component';
import { UpdateOrdenanceComponent } from './FrontOffice/Ordenance/update-ordenance/update-ordenance.component';
import { ListOrdenanceComponent } from './FrontOffice/Ordenance/list-ordenance/list-ordenance.component';
import { AjouterOrdenanceComponent } from './FrontOffice/Ordenance/ajouter-ordenance/ajouter-ordenance.component';
import { ListPresenceComponent } from './FrontOffice/attendance/list-presence/list-presence.component';
import { PresenceCalenderComponent } from './FrontOffice/shared/presence-calender/presence-calender.component';
import { AdminMedecinAlertComponent } from './BackOffice/admin-medecin-alert/admin-medecin-alert.component';
import { AlertChartComponentComponent } from './BackOffice/alert-chart-component/alert-chart-component.component';
import { StatEventByUserComponent } from './BackOffice/stat-event-by-user/stat-event-by-user.component';
import { AverageParticipantsComponent } from './BackOffice/average-participants/average-participants.component';
import { ListeCommentByEventComponent } from './BackOffice/liste-comment-by-event/liste-comment-by-event.component';
import { StatsBrahmiComponent } from './BackOffice/stats-brahmi/stats-brahmi.component';
import { BrhStastsGenreComponent } from './BackOffice/brh-stasts-genre/brh-stasts-genre.component';
import { GestionreclamationComponent } from './BackOffice/gestionreclamation/gestionreclamation.component';
import { StatistiquereclamationComponent } from './BackOffice/statistiquereclamation/statistiquereclamation.component';
import { AjouterreclamationComponent } from './FrontOffice/ajouterreclamation/ajouterreclamation.component';
import { AjouterreponsereclamationComponent } from './BackOffice/ajouterreponsereclamation/ajouterreponsereclamation.component';
import { ListreclamationnonrepondueComponent } from './BackOffice/listreclamationnonrepondue/listreclamationnonrepondue.component';
import { AjouterreponsereclamationretardComponent } from './BackOffice/ajouterreponsereclamationretard/ajouterreponsereclamationretard.component';
import { ProduitbeneficesComponent } from './BackOffice/produitbenefices/produitbenefices.component';


const routes: Routes = [
  {
    path: "forbidden",
    component: ForbiddenComponent
  },
  {
    path: "",
    component: AllTempleteFrontComponent,
    children: [
      { path: 'afficherevennementfront', component: AfiicheevennementfrontComponent },
      { path: 'alert', component: AlertComponent },
      { path: 'alertmedcin', component: AlertmedecinComponent },
      { path: 'map', component: MapComponent },
      { path: 'calendar', component: calendarComponent },
      { path: 'event/:id', component: EventDetailsComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "etablissment", component: AfficheEtablissmentFrontComponent },
      { path: "detailetablissment/:id", component: DetailEtablissementComponent },
      { path: "produits", component: AfficheProduitComponent },
      { path: "panier", component: PanierComponent },
      { path: "Favoris", component: MesfavorisComponent },
      { path: "commande", component: CommandeComponent },
      { path: "listePlats", component: AffichePlatExisteComponent },
      {
        path:"ggg",
        component:AjouterreclamationComponent
      },
      { path: "ajouterCounge", component: AjouterCoungeComponent },
      { path: "FrontlisteCounges", component: AfficheCoungeFrontComponent },
      { path: "FrontUpdateCounges/:id", component: UpdateCoungeFrontComponent },
      { path: "affRepas", component: AfficherRepasComponent },
      { path: "shelters", component: AfficheSheltersFrontComponent },
      { path: 'ajoutDonateurEtAide', component: AjoutAideDonateurComponent },
      { path: 'cause', component: AfficheCauseComponent },
      {
        path:"Medecins",
        component:AfficherMedecinsComponent
      },
      {
        path:"Rdv/:id",
        component:RdvComponent
      },
      {
        path:"ListRdvMedecin",
        component:ListRdvMedecinComponent
      },
      {
        path:"UpdateRdvPatient/:id",
        component:UpdateRdvByMEdecinComponent
      },
      {
        path:"SuiviePatEtab",
        component:SuiviePatientEtabComponent
      },
      {
        path:"SuivieInfPatEtab",
        component:ListePatientParInfEtabComponent
      },
      {
        path:"UpdatePatInEtab/:id",
        component:ModifierPatEtabComponent
      },
      {
        path:"qrcodeDeath",
        component:FrontQrPatienMorgueComponent
      },

      {
        path:"listActivitePatient",
        component:ListActivityPatientComponent
      },
      {
        path:"addActivity",
        component:AddActivityOrganisateurComponent
      },
      {
        path:"favorite",
        component:ListFavoriPatientComponent
      },
      {
        path:"listOrgaActivities",
        component:OrganisateurActivitiesComponent
      },
      {
        path:"listPatientActivities",
        component:YourActivityPatientComponent
      },
      { path: "AffOrdByMed", component: AficheLesOrdenanceByRDVComponent },
      { path: "chatLtifi", component: ChatLtifiComponent },
      { path: "modifierOrd/:id", component: UpdateOrdenanceComponent },
      { path: "affOrd", component: ListOrdenanceComponent },
      { path: "AjouterOrd", component: AjouterOrdenanceComponent },
      { path: "affPres", component: ListPresenceComponent },
      { path: "listeMedicaments", component: AfficheMedicamentComponent },
      { path: "ajouterMedicament", component: AjouterMedicamentComponent },
      { path: "modifierMedicament/:id", component: ModifierMedicamentComponent },

      { path: "listeMaladies", component: ListeMaladieComponent },
      { path: "ajouterMaladie", component: AjouterMaladieComponent },
      { path: "modofierMaladie/:id", component: ModifierMaladieComponent },

      { path: "ajouterFood", component: AjouterFoodComponent },
      { path: "listeIngredients", component: ListeFoodComponent },
      { path: "modifierFood/:id", component: ModifierFoodComponent },
      { path: "listeRepas", component: ListRepasComponent },
      
      { path: "ajouterPlats", component: AjouterPlatComponent },
      { path: "modifierPlat/:id", component: UpdatePlatComponent },
     
      { path: "listeRepas", component: ListRepasComponent },

      { path: "ajouterRepas", component: AjouterRepasComponent },
     
    ]
  },
  {
    path: "admin",
    component: AllTemplateBackComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
    children: [
      { path: "AletMed", component: AdminMedecinAlertComponent },
      { path: "alertchrts", component: AlertChartComponentComponent },
      {
        path:"listreclamationnonrepondue",
        component:ListreclamationnonrepondueComponent
      },
      {
        path:"listeEtablissement",
        component:ListeetablissementComponent
      },
      
      {
        path:"pp",
        component:ProduitbeneficesComponent
      },
      {
        path:"rr",
        component:StatistiquereclamationComponent
      },
      {
        path:"reclamation",
        component:GestionreclamationComponent
      },
      {
        path:"reponsereclamation/:idReclamation",
        component:AjouterreponsereclamationComponent
      },
      {
        path:"reponsereclamation1/:idReclamation",
        component:AjouterreponsereclamationretardComponent
      },
      
      { path: "listeEtablissement", component: ListeetablissementComponent },
      { path: "ajouterEtablissement", component: AjouterEtablissementComponent },
      { path: 'ajouterProduit', component: AjoutProduitComponent },
      { path: "l", component: StatistiqueComponent },
      { path: "modifierProduit/:idProduit", component: ModifierproduitComponent },
      { path: 'listProduit', component: ListProduitComponent },
      { path: "l1", component: StatComponent },
      { path: "s", component: ValidationComponent },
      { path: "modifierEtablissement/:id", component: ModifieretablissementComponent },
      { path: "listAmbulance", component: ListeAmbulanceComponent },
      { path: "ajouterAmbulance", component: AjouterAffctAmbulanceComponent },
      { path: "ajouterMorgue", component: AjouterMorgueComponent },
      { path: "listeMorgue", component: ListeMorgueComponent },
      { path: "UpdateMorgue/:id", component: UpdatemorgueComponent },
      { path: "detailAmbulance/:id", component: DetailAmbulanceComponent },
      { path: "UpdateAmbulance/:id", component: UpdateAmbulanceComponent },
      { path: "ajouterAmbulancier", component: AjouterAmbulancierComponent },
      { path: "modifierrAmbulancier/:id", component: UpdateAmbulancierComponent },
      { path: "listeAmbulancier", component: ListeAmbulancierComponent },
      { path: "UpdateAmbulancierAmbulance/:id", component: ModifierambulancierAmbulanceComponent },
      { path: "stats", component: StatsComponent },
      { path: 'listeEvennement', component: ListeEvennementComponent },
      { path: 'ajouterevennement', component: AjouterevennementComponent },
      { path: 'modifierevennement/:id', component: ModifierevennementComponent },
      { path: 'calendar', component: calendarComponent },

      { path: "Listerestos", component: AfficheRestaurantComponent },
      
      { path: "ajouterRestaurant", component: AjouterRestaurantComponent },
      { path: "modifierRestaurant/:id", component: ModifierRestaurantComponent },
      { path: "listePlats", component: AffichePlatComponent },
     { path: "listecounge", component: AfficheCoungeComponent },
      { path: "UpdateCounges/:id", component: ModifierCoungeComponent },
      { path: 'listShelter', component: ListShelterComponent },
      { path: 'ajoutShelter', component: AjoutShelterComponent },
      { path: 'editShelter/:id', component: UpdateShelterComponent },
      { path: 'ajoutAide', component: AjoutAideComponent },
      { path: 'listAide', component: ListAideComponent },
      { path: 'editAide/:id', component: UpdateAideComponent },
      { path: 'ajoutService', component: AjoutServiceShelterComponent },
      { path: 'ajoutServiceAndAffect', component: AjoutAndAffectServiceToShelterComponent },
      { path: 'listService', component: ListServiceShelterComponent },
      { path: 'editService/:id', component: UpdateServiceShelterComponent },
      { path: 'listDonateurAide', component: ListDonateurAvecAideComponent },
      { path: 'addCause', component: AddCauseShelterComponent },
      { path: 'listCause', component: AfficheCauseBackComponent },
      { path: 'updateCause/:id', component: UpdateCauseComponent },
      { path: "statBadge", component: StatBadgeComponent },
      {
        path:"listeMedecin",
        component:ListeMedecinComponent 
      },
      { path: 'StatEvent', component: StatEventByUserComponent },
      { path: 'StatAverage', component: AverageParticipantsComponent },
      { path: "listeComment/:id", component: ListeCommentByEventComponent },
      //////////////////////////////////////////////////////////////////////////
      {
        path:"listeInfermier",
        component:ListeinfermierComponent 
      },
      {
        path:"listePatients",
        component:ListePatientComponent 
      },
      {
        path:"listeRdvs",
        component:ListRdvsComponent 
      },
      {
        path:"listePatientAmbulance",
        component:ListePatientInAmbulanceComponent
      },
      {
        path:"listeDeath",
        component:ListeDeathPatientComponent
      },
      {path: 'chartsActivity',component: ActivityQualityChartsComponent},
      {path: 'listActivity',component: ListActivityComponent},
      {path: 'updateActivity/:id',component: UpdateActivityComponent},
      {path: 'badgeOrganisateur',component: RatingsAndBadgeComponent},

      { path: "presenceCalender", component: PresenceCalenderComponent },
      { path: "Top3Med", component: Top3MedicamentComponent },
      {
        path:"brhstats",
        component:StatsBrahmiComponent
      },
      {
        path:"StatsGenreBrh",
        component:BrhStastsGenreComponent
      },

  
    ]
  },
  {
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: ['USER'] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
