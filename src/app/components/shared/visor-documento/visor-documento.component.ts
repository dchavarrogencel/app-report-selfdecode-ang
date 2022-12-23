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
/**
 * Clase encargada de realizar la implementación de visor de documento
 * @autor dchavarro
 */
export class VisorDocumentoComponent implements OnInit {
  @Input() pdfSrc = '';
  @Input() nameFile = '';
  fileUrl:any;
 /**
  * Metodo encargado de instanciar los objetos requeridos
  * @param clipboard 
  * @param sanitizer 
  * @param service 
  */
  constructor( private clipboard: Clipboard, private sanitizer: DomSanitizer, private service: ServiceUtils) {
   }
  /**
   * Esto solo aplica para cuando se prueba local con el proxy
   */
  ngOnInit(): void {
    /*if(this.pdfSrc !=''){
      this.pdfSrc = this.pdfSrc.replace(environment.api_url_documento,'')
      this.downloadPdf();
    }*/
    
  }
  /**
   * Metodo encargado de descargar el documento pdf
   */
  downloadPdf(){
    this.service.downloadDocument(this.pdfSrc).subscribe((response) =>{
      const blob = new Blob([response], { type: 'application/pdf' });

      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    });
  }
}
