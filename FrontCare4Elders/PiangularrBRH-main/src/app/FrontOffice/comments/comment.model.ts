import { User } from "src/app/FrontOffice/user/user.model";


export class Commantaire{
    id? : number |null;
    date?: Date;
    contenu?: string;
    statut?: string;
    user?: User | null;
}