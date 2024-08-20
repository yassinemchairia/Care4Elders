import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { Chart } from 'chart.js';

interface AlertChartData {
  medecin: { nom: string };
  alertCount: number;
}

@Component({
  selector: 'app-alert-chart-component',
  templateUrl: './alert-chart-component.component.html',
  styleUrls: ['./alert-chart-component.component.css']
})
export class AlertChartComponentComponent implements OnInit, AfterViewInit {
  @ViewChild('barCanvas') private barCanvas!: ElementRef;
  private barChart: any;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.updateChart();
  }

  ngAfterViewInit(): void {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Nombre d\'alertes',
          data: [],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
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

  updateChart(): void {
    this.alertService.getAlertsPerMedecin().subscribe((data: AlertChartData[]) => {
      const medecins = data.map(item => item.medecin.nom);
      const alertCounts = data.map(item => item.alertCount);

      this.barChart.data.labels = medecins;
      this.barChart.data.datasets[0].data = alertCounts;
      this.barChart.update();
    });
  }
}
