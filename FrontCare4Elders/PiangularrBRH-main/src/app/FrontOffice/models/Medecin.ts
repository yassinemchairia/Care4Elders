export interface Medecin {
    idMedecin: number;
    disponible: boolean;
    user: number;
    specialite: Specialite;
    nom:string;
   prenom:string;
   mail:string;
   x :number;
   y :number;
  adresse:string; 

}
  export enum Specialite {
    PSYCHIATRIE='PSYCHIATRIE'
    ,PEDIATRIE='PEDIATRIE'
    ,CARDIOLOGIE='CARDIOLOGIE'
    ,DERMATOLOGIE='DERMATOLOGIE'
    ,ANESTHESIOLOGIE='ANESTHESIOLOGIE'
    ,CHIRURGIE='CHIRURGIE'
    ,GENERAL='GENERAL'
  }
