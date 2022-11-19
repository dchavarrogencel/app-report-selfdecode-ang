import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-visor-documento',
  templateUrl: './visor-documento.component.html',
  styleUrls: ['./visor-documento.component.css']
})
export class VisorDocumentoComponent implements OnInit {
  @Input() pdfSrc = '';
  constructor() {
    console.log('this.pdfSrc ' , this.pdfSrc);
   }

  ngOnInit(): void {
    console.log('this.pdfSrc ' , this.pdfSrc);
  }

}
