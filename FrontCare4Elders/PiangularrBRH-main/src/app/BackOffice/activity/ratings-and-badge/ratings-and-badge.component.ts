import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import Chart, { ChartItem } from 'chart.js/auto';

@Component({
  selector: 'app-ratings-and-badge',
  templateUrl: './ratings-and-badge.component.html',
  styleUrls: ['./ratings-and-badge.component.css']
})
export class RatingsAndBadgeComponent implements OnInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  // ratingsAndBadges: any = {};
  ratingsAndBadges: { [key: string]: any } = {}; // Définir le type de ratingsAndBadges comme un objet avec des clés de type string et des valeurs de type any

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.fetchRatingsAndBadges();
  }

  fetchRatingsAndBadges(): void {
    this.activityService.getRatingsAndBadges().subscribe(
      (data) => {
        this.ratingsAndBadges = data;
        this.renderChart();
      },
      (error) => {
        console.log('Erreur lors de la récupération des évaluations et badges :', error);
      }
    );
  }

  renderChart(): void {
    if (!this.ratingsAndBadges) {
      return;
    }

    const ctx = this.chartCanvas?.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Contexte du canvas est null.');
      return;
    }

    const activityNames = Object.keys(this.ratingsAndBadges);
    const data = activityNames.map((name) => {
      const activityData = this.ratingsAndBadges[name];
      return {
        activityName: name,
        activityRating: activityData.activityRating,
        organizerFirstName: activityData.organizerFirstName,
        organizerLastName: activityData.organizerLastName,
        organizerBadge: activityData.organizerBadge
      };
    });

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(item => item.activityName),
        datasets: [{
          label: 'Notes des activités',
          data: data.map(item => item.activityRating),
          backgroundColor: 'rgba(75, 192, 192, 0.5)', // Couleur de fond du graphique
          borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la bordure du graphique
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Notes'
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                const item = data[tooltipItem.dataIndex];
                return `Activité: ${item.activityName}\nOrganisateur: ${item.organizerFirstName} ${item.organizerLastName}\nBadge: ${item.organizerBadge}\nNote: ${item.activityRating}`;
              }
            }
          }
        }
      }
    });
  }



  getBadgeClass(badgeType: string): string {
    switch (badgeType) {
      case 'GOLD':
        return 'gold-badge';
      case 'SILVER':
        return 'silver-badge';
      case 'BRONZE':
        return 'bronze-badge';
      default:
        return '';
    }
  }
}
