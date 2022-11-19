import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { ScriptService } from './ScriptService ';
import { Report } from '../../../models/report';
import { of } from "rxjs";
import { delay, map,  tap } from "rxjs/operators";
import { Router } from '@angular/router';
import { DocumentoService } from '../../../services/generate-pdf';
import { RequestDocument } from '../../../models/RequestDocument';
import { environment } from '../../../../environments/environment.prod';
import { ResponseDocument } from '../../../models/ResponseDocument';
import { ResponseGetDocument } from '../../../models/ResponseGetDocument';
import { ThisReceiver } from '@angular/compiler';
import { CONST_GENCELL } from '../../../../environments/enviroment.variables';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  @Input() lstReportParam: Array<Report> =  new Array<Report>();


  indMostrarBtn=false;
  indLoading=false;
  report: Report;
  requestDocumento: RequestDocument;
  responseDocument: ResponseDocument;
  responseGetDocument: ResponseGetDocument;
  mensaje ='';
  url ='';

  constructor(private scriptService: ScriptService, private router: Router, private serviceDocumento : DocumentoService, private sanitizer: DomSanitizer) { 
    this.report = new Report();
    this.requestDocumento = new RequestDocument();
    this.responseDocument = new ResponseDocument();
    this.responseGetDocument = new ResponseGetDocument();
    console.log('resport ' , this.lstReportParam);
  }

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        tap(val => console.log("Before " + val)),
        delay(150000)
      )
      .subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log("Complete")
      );
    console.log('resport ' , this.lstReportParam);
    
    this.scriptService.loadScript('my-script', 'assets/js/jquery.min-persona.js')
    .then(data => {
        console.log('script loaded ', data);
    }).catch(error => console.log(error));

    this.scriptService.loadScript('my-script1', 'assets/js/jquery.flipster.min.js')
    .then(data => {
        console.log('script loaded ', data);
    }).catch(error => console.log(error));

    this.scriptService.loadScript('my-script2', 'assets/js/inicio-carrousel.js')
    .then(data => {
        console.log('script loaded ', data);
    }).catch(error => console.log(error));
    
  }

  onClickHabilitarAcciones(item: Report){
    console.log('Ingreso al evento' );
    this.indMostrarBtn=true;
    this.inicializarSeleccionado(item);
  }
  inicializarSeleccionado(item: Report){
    for(let i=0;i<this.lstReportParam.length;i++){
      if(this.lstReportParam[i].id != item.id){
        this.lstReportParam[i].seleccionado ='';
      }else{
        this.lstReportParam[i].seleccionado ='checked';
      }
    }
  }
  onClickRecomendacion(id: any) {
    this.router.navigate(['recomendation', id])
  }
  onClickRecomendacionPerfil(id: any) {
    this.router.navigate(['recomendation-trait', id])
  }
  onClickRasgoPerfil(id: any) {
    this.router.navigate(['profile-trait', id])
  }
  onClickDetailModal(item: any) {
    console.log("Item modal ", item);
    this.report = item;
  }

  onClickVerDocumento(item: Report){
    console.log('Ver documento ' , item);
    this.indLoading =true;
    this.mensaje ='';
    this.url ='';
    this.generateDocumento(item.id, String(localStorage.getItem("profileId")))
  }

  generateDocumento(idReport: string, idProfile: string){
    this.requestDocumento.profile_id = idProfile;
    this.requestDocumento.report_id= idReport;
    this.requestDocumento.customization.header_logo=CONST_GENCELL.LOGO_GENCELL;
    this.serviceDocumento.generateDocument(this.requestDocumento, environment.idioma_default).subscribe(response =>{
       this.responseDocument = response;
       if(this.responseDocument.request_id != undefined && this.responseDocument.request_id != ''){
        //this.responseDocument.request_id
        this.serviceDocumento.getDocument("5293b154-8882-47d7-b7ef-7639412bac69", environment.idioma_default).subscribe(response =>{
          this.responseGetDocument = response; 
          let result = this.responseGetDocument.result != undefined ? this.responseGetDocument.result:"";
          let resultado = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(result));
          this.url = resultado != undefined ? resultado:"";
          this.mensaje =  this.responseGetDocument.message != undefined  && this.url ===""? this.responseGetDocument.message: "" ;
          this.indLoading =false;
          
      });
    }
    });
  }

}
