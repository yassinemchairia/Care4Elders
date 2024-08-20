import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { PatientService } from 'src/app/services/patient.service';
import { Chart, ChartOptions } from 'chart.js';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-brh-stasts-genre',
  templateUrl: './brh-stasts-genre.component.html',
  styleUrls: ['./brh-stasts-genre.component.css']
})
export class BrhStastsGenreComponent {
  etablissementsList$!: Observable<any>;
  @ViewChild('barChart') barChart!: ElementRef<HTMLCanvasElement>;
  chartInstance: Chart | undefined;
  url = 'URL_DE_VOTRE_API/';

  constructor(
    private http: HttpClient,
    private etablissementService: EtablissementService,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    this.etablissementsList$ = this.etablissementService.listeEtablissement();
  }

  onEtablissementSelected(selectedEtabId: number): void {
    forkJoin([
      this.patientService.retrievePatientinEtab(selectedEtabId),
      this.etablissementService.getEtablissement(selectedEtabId)
    ]).subscribe(([patients, etab]) => {
      if (patients && typeof patients === 'object' && etab) {
        console.log('Patients in etab', patients);
        const pourcentageHommes = patients['Pourcentage Hommes'] || 0;
        const pourcentageFemmes = patients['Pourcentage Femmes'] || 0;
        this.createBarChart(etab.nomEtab, pourcentageHommes, pourcentageFemmes);
      } else {
        console.error('Patients data or etablissement data is not in the expected format.');
      }
    });
  }

  createBarChart(etabName: string, pourcentageHommes: number, pourcentageFemmes: number): void {
    if (!this.chartInstance) {
      const ctx = this.barChart.nativeElement.getContext('2d') as CanvasRenderingContext2D;
      if (!ctx) {
        console.error('Canvas element not found.');
        return;
      }

      this.chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [etabName],
          datasets: [
            {
              label: 'Pourcentage Hommes',
              data: [pourcentageHommes],
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            },
            {
              label: 'Pourcentage Femmes',
              data: [pourcentageFemmes],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 10
              }
            }
          }
        }
      });
    } else {
      this.chartInstance.data.labels = [etabName];
      this.chartInstance.data.datasets[0].data = [pourcentageHommes];
      this.chartInstance.data.datasets[1].data = [pourcentageFemmes];
      this.chartInstance.update();
    }
  }
}
