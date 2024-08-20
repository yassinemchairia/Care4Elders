import { Cuisinier } from "./Cuisinier";


export class Attendance {
  attendenceId?: number;
  presence!: boolean;

  start?: Date;
  end?: Date;
  cuisinier?: Cuisinier;
  workedHours!: number;
}

