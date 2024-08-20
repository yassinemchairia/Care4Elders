export interface Patient {
  idpatient: number;
  user: number;
  typePatient: TypePatient;
  archiver: boolean;
  poid :number;
  longueur:number;
  sexe:Sexe;
  dateDeNaissance:Date;
   nom:string
   prenom:string
   mail:string
   x :number;
   y :number;
  adresse:string; 
   
}
export enum TypePatient {
  NORMAL = 'NORMAL',
  URGENT = 'URGENT',
  DECEDE = 'DECEDE',
  GUERIE ='GUERIE'
}
export enum Sexe {

  HOMME ='HOMME',
  FEMME ='FEMME',
  

}