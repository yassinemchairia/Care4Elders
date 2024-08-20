import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-quality-charts',
  templateUrl: './activity-quality-charts.component.html',
  styleUrls: ['./activity-quality-charts.component.css']
})
export class ActivityQualityChartsComponent implements OnInit {
  activityStats: any = {};

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.getActivityStats();
  }

  getActivityStats(): void {
    this.activityService.getQualityTrend().subscribe((data: any) => {
      this.activityStats = data;
      this.renderChart();
      console.log('Données récupérées avec succès :', data); // Afficher les données dans la console
    }, (error) => {
      console.error('Une erreur s\'est produite lors de la récupération des données :', error);
    });
  }

  renderChart(): void {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
  
    if (!ctx) {
      console.error('Impossible de récupérer le contexte de rendu du canevas.');
      return;
    }
  
    // Convertir les données reçues en format utilisable pour le graphique
    const labels: string[] = [];
    const datasets: any[] = [];
  
    // Parcourir les données pour extraire les labels et les données des datasets
    for (const date in this.activityStats) {
      if (this.activityStats.hasOwnProperty(date)) {
        const activities = this.activityStats[date];
        labels.push(date);
        for (const activity in activities) {
          if (activities.hasOwnProperty(activity)) {
            if (!datasets.find(dataset => dataset.label === activity)) {
              datasets.push({
                label: activity,
                data: [],
                backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`,
                borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
                borderWidth: 2
              });
            }
          }
        }
      }
    }
  
    // Remplir les données des datasets
    for (const dataset of datasets) {
      for (const date of labels) {
        const count = this.activityStats[date][dataset.label] || 0;
        dataset.data.push(count);
      }
    }
  
    const chartData = {
      labels,
      datasets
    };
  
    new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 10 // Définir la valeur maximale de l'axe y à 10
          }
        }
      }
    });
  }
}  