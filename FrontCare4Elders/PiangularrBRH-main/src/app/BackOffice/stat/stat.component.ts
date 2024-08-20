import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  chart: any;

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.getCommandesEnAttente1().subscribe(
      totalEnAttente => {
        this.commandeService.getCommandesExpediees().subscribe(
          totalExpediees => {
            this.createChart(totalEnAttente, totalExpediees);
          }
        );
      }
    );
  }

  createChart(totalEnAttente: number, totalExpediees: number): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Commandes en attente', 'Commandes expédiées'],
        datasets: [{
          label: 'Nombre de commandes',
          data: [totalEnAttente, totalExpediees],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // Rouge pour les commandes en attente
            'rgba(54, 162, 235, 0.2)' // Bleu pour les commandes expédiées
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
