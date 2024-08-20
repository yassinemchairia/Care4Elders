import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

import { forkJoin } from 'rxjs';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent  {

  

  constructor(private commandeService: CommandeService) { }

 
}
