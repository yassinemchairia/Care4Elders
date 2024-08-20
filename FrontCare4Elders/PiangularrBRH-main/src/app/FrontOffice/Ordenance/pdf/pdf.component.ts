import { Component, Input } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PDFComponent {
  @Input  () ordenanceData: any; // Accepter des données en entrée

  ordenance = {
    titre: 'Exemple de Titre',
    instructions: 'Suivez ces instructions',
    dosage: 100,
    frequence: 2,
    duree: 14,
  };

  generatePDF() {
    let pdfContent = document.getElementById('pdfContent');
    if (pdfContent) {
      pdfContent.style.display = 'block';
      html2canvas(pdfContent, { scale: 2 }).then(canvas => {
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('Ordonnance.pdf');
        // pdfContent.style.display = 'none';
      });
    }
  }
}
