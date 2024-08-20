import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MedecinService } from 'src/app/services/medecin.service';
import { Chart, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-stats-brahmi',
  templateUrl: './stats-brahmi.component.html',
  styleUrls: ['./stats-brahmi.component.css']
})
export class StatsBrahmiComponent {
  top3Medecins$!: Observable<any>;
  @ViewChild('barChart') barChart!: ElementRef<HTMLCanvasElement>;
  chartInstance: Chart | undefined;

  constructor(private medecinService: MedecinService) { }

  onDatesSelected(startDate: string, startTime: string, endDate: string, endTime: string): void {
    const formattedStartDate = `${startDate}T${startTime}:00`;
    const formattedEndDate = `${endDate}T${endTime}:00`;
    
    this.top3Medecins$ = this.medecinService.getTop3Medecins(formattedStartDate, formattedEndDate);
    this.top3Medecins$.subscribe((data) => {
      if (data) {
        setTimeout(() => { // Utilisation de setTimeout pour retarder la création du graphique
          this.createBarChart(data);
        }, 100);
      }
    });
  }

  createBarChart(data: any): void {
    // Vérifiez si l'élément canvas est disponible
    if (!this.barChart || !this.barChart.nativeElement) {
      console.error('Canvas element not found.');
      return;
    }

    const ctx = this.barChart.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    
    const options: ChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    };

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((medecin: any) => medecin.nom),
        datasets: [{
          label: 'Nombre de RDVs',
          data: data.map((medecin: any) => medecin.rdvs.length),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: options
    });
  }
}
