import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-average-participants',
  templateUrl: './average-participants.component.html',
  styleUrls: ['./average-participants.component.css']
})
export class AverageParticipantsComponent implements OnInit {
  chartData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8087/evennements/average-participants-per-type')
      .subscribe(data => {
        this.chartData = data;
        this.renderChart();
      });
  }

  renderChart(): void {
    const canvas = <HTMLCanvasElement>document.getElementById('myChart');
    if (!canvas) {
      console.error("Canvas element with id 'myChart' not found");
      return;
    }
    
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D; // Assurez-vous de spécifier le type

    const labels = Object.keys(this.chartData);
    const data = Object.values(this.chartData);

    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Average Participants per Type',
          data: data,
          backgroundColor: [
            'green',   // Vert
            'red',     // Rouge
            'blue',    // Bleu
            'orange',  // Orange
            'purple'   // Violet (par exemple)
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem: any) => {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              }
            }
          }
        }
      }
    });
  }
}
