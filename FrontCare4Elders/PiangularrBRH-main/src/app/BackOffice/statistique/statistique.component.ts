import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  totalCommandesByMonth: number[] = new Array(12).fill(0); // Initialiser avec 12 zéros pour chaque mois
  totalCommandesByYear: number[] = [];
  chart: any;
  isByMonthSelected: boolean = true;
  selectedYear: number =0;

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.getTotalCommandesForAllMonths();
    this.createChart();
  }

  getTotalCommandesForAllMonths(): void {
    for (let month = 1; month <= 12; month++) {
      this.getTotalCommandesByMonth(month);
    }
  }

  getTotalCommandesByMonth(month: number): void {
    this.commandeService.getTotalCommandesByMonth(month).subscribe(
      total => {
        this.totalCommandesByMonth[month - 1] = total;
        this.updateChart();
      },
      err => {
        console.error('Erreur lors de la récupération du total des commandes pour le mois', month, ':', err);
      }
    );
  }

  getTotalCommandesByYear(year: number): void {
    this.commandeService.getTotalCommandesByYear(year).subscribe(
      total => {
        this.totalCommandesByYear[0] = total;

        this.updateChart();
      },
      err => {
        console.error('Erreur lors de la récupération du total des commandes pour l\'année', year, ':', err);
      }
    );
  }

  createChart(): void {
    if (this.isByMonthSelected) {
      this.chart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
          ],
          datasets: [
            {
              label: 'Total Commandes',
              data: this.totalCommandesByMonth,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      this.chart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: this.totalCommandesByYear.map((_, index) => index + 1),
          datasets: [
            {
              label: 'Total Commandes',
              data: this.totalCommandesByYear,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }
          ]
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

  updateChart(): void {
    if (this.chart) {
      if (this.isByMonthSelected) {
        this.chart.data.datasets[0].data = this.totalCommandesByMonth;
        this.chart.data.labels = [
          'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
          'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ];
      } else {
        this.chart.data.datasets[0].data = this.totalCommandesByYear;
        this.chart.data.labels = this.totalCommandesByYear.map((_, index) => index + 1);
      }
      this.chart.update();
    }
  }
  onShowByMonth(): void {
    this.isByMonthSelected = true;
    this.createChart();
  }

  onShowByYear(): void {
    this.isByMonthSelected = false;
    this.totalCommandesByYear = [];
    // Mettez en place la logique pour afficher les statistiques par année ici
    // Affichez la zone de texte pour l'année et le bouton "Entrer" dans le HTML
  }

  onYearInput(): void {
    // Appeler getTotalCommandesByYear avec l'année saisie par l'utilisateur
    this.getTotalCommandesByYear(this.selectedYear);
  }
}