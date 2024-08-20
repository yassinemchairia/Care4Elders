import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
 selector: 'app-front-qr-patien-morgue',
 templateUrl: './front-qr-patien-morgue.component.html',
 styleUrls: ['./front-qr-patien-morgue.component.css']
})
export class FrontQrPatienMorgueComponent implements OnInit {
 listeDeath: any[] = []; // Initialisez listeDeath comme un tableau vide de type any
 qrCodeLinks: { [key: number]: string } = {};

 constructor(private shared: PatientService, private router: Router) {}

 ngOnInit(): void {
    this.getListDeathPatient();
 }

 getListDeathPatient() {
    this.shared.getPatientsDeath()
      .subscribe(
        res => {
          this.listeDeath = res;
          this.generateQRCodesForPatients();
        },
        err => {
          console.log(err);
        }
      );
 }

 generateQRCodesForPatients() {
    if (this.listeDeath && this.listeDeath.length > 0) {
      this.listeDeath.forEach((patient: any) => {
        this.shared.generateQRCodeForPatient(patient.idpatient)
          .subscribe(
            blob => {
              const reader = new FileReader();
              reader.onloadend = () => {
                this.qrCodeLinks[patient.idpatient] = reader.result as string;
              };
              reader.readAsDataURL(blob);
            },
            error => {
              console.error('Error generating QR code:', error);
            }
          );
      });
    } else {
      console.log('listeDeath is not initialized or empty');
    }
 }

 getKeys(obj: any): number[] {
    return Object.keys(obj).map(Number);
 }
}
