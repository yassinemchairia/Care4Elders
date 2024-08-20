import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stat-event-by-user',
  templateUrl: './stat-event-by-user.component.html',
  styleUrls: ['./stat-event-by-user.component.css']
})
export class StatEventByUserComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDataAndRenderChart();
  }

  fetchDataAndRenderChart(): void {
    this.http.get<any>('http://localhost:8087/evennements/usersWithEventCount')
      .subscribe(data => {
        this.renderChart(data);
      });
  }

  renderChart(data: any[]): void {
    const labels = data.map(item => `${item[1]} ${item[2]}`); //  je Combine firstname and lastname 
    const eventCounts = data.map(item => item[3]);

    const ctx = document.getElementById('userEventChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'nombre de participation ',
          data: eventCounts,
          backgroundColor: 'rgba(54, 162, 235, 0.6)' // Blue color 
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
