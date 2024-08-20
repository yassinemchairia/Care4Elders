import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentService } from 'src/app/services/medicament.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-top3-medicament',
  templateUrl: './top3-medicament.component.html',
  styleUrls: ['./top3-medicament.component.css']
})
export class Top3MedicamentComponent {
  startDate!: Date;
  endDate!: Date;
  top: any[] = []; 

  constructor(private shared: MedicamentService, private router: Router) {}

  getTopMedicaments(): void {
    if (this.startDate && this.endDate) {
      const startDateStr = formatDate(this.startDate, 'yyyy-MM-dd', 'en-US');
      const endDateStr = formatDate(this.endDate, 'yyyy-MM-dd', 'en-US');

      this.shared.findMedicamentsConsumedBetweenDates(startDateStr, endDateStr)
        .subscribe(
          res => {
            console.log(res);
            this.top = res;
          },
          err => {
            console.log(err);
          }
        );
    }
  }
}
