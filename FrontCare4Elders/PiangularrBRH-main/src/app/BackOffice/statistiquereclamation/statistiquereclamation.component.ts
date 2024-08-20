import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-statistiquereclamation',
  templateUrl: './statistiquereclamation.component.html',
  styleUrls: ['./statistiquereclamation.component.css']
})
export class StatistiquereclamationComponent implements OnInit {
  chart: any;
  chartData: any = {
   
    datasets: [{
      data: [0, 0, 0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 3
    }]
  };
  selectedDate: string = '';

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    this.chart = new Chart('reclamationsChart', {
      type: 'bar',
      data: this.chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  onChangeDate() {
    const selectedDate = this.selectedDate;
    if (selectedDate) {
      this.reclamationService.getTotalReclamationsByDate(selectedDate).subscribe(
        (data) => {
          this.chartData.datasets[0].data = data;
          this.chart.update();
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des données de statistiques : ', error);
          // Gérer l'erreur avec une notification à l'utilisateur
        }
      );
    } else {
      this.chartData.datasets[0].data = [0, 0, 0];
      this.chart.update();
    }
  }
}
