import { Component, Injectable, Input, OnInit, SecurityContext } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceUtils } from '../../../services/service.utils';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-visor-documento',
  templateUrl: './visor-documento.component.html',
  styleUrls: ['./visor-documento.component.css']
})
export class VisorDocumentoComponent implements OnInit {
  @Input() pdfSrc = '';
  @Input() nameFile = '';
  fileUrl:any;

  constructor( private clipboard: Clipboard, private sanitizer: DomSanitizer, private service: ServiceUtils) {
   }

  ngOnInit(): void {
    if(this.pdfSrc !=''){
      this.pdfSrc = this.pdfSrc.replace(environment.api_url_documento,'')
      this.downloadPdf();
    }
    
  }
  downloadPdf(){
    this.service.downloadDocument(this.pdfSrc).subscribe((response) =>{
      const blob = new Blob([response], { type: 'application/pdf' });

      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    });
  }
}
