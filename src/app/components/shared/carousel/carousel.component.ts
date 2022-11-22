import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { ScriptService } from './ScriptService ';
import { Report } from '../../../models/report';
import { Router } from '@angular/router';
import { DocumentoService } from '../../../services/generate-pdf';
import { RequestDocument } from '../../../models/requestDocument';
import { ResponseDocument } from '../../../models/responseDocument';
import { ResponseGetDocument } from '../../../models/responseGetDocument';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { CONST_GENCELL } from '../../../../environments/enviroment.variables';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  VALIDAR_ADMINISTRACION_GENERAR_PDF_SELFDECODE = 'Por favor validar con el administrador el servicio de generar el pdf esta fallando'
  @Input() lstReportParam: Array<Report> =  new Array<Report>();


  indMostrarBtn=false;
  indLoading=false;
  report: Report;
  requestDocumento: RequestDocument;
  responseDocument: ResponseDocument;
  responseGetDocument: ResponseGetDocument;
  mensaje ='';
  url ='';
  nameFile ='';

  constructor(private scriptService: ScriptService, private router: Router, private serviceDocumento : DocumentoService, private sanitizer: DomSanitizer) { 
    this.report = new Report();
    this.requestDocumento = new RequestDocument();
    this.responseDocument = new ResponseDocument();
    this.responseGetDocument = new ResponseGetDocument();
  }

  ngOnInit(): void {
    
    this.scriptService.loadScript('SCRIPT_PERS', 'assets/js/jquery.min-persona.js')
    .then(data => {
    }).catch(error => console.log(error));

    this.scriptService.loadScript('SCRIPT_FLIPSTER', 'assets/js/jquery.flipster.min.js')
    .then(data => {
    }).catch(error => console.log(error));

    this.scriptService.loadScript('SCRIPT_CARROUSEL', 'assets/js/inicio-carrousel.js')
    .then(data => {
    }).catch(error => console.log(error));
    
  }

  onClickHabilitarAcciones(item: Report){
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
    this.report = item;
  }

  onClickVerDocumento(item: Report){
    console.log('Ver documento ' , item);
    this.indLoading =true;
    this.mensaje ='';
    this.url ='';
    this.nameFile = item.name +".pdf";
    this.generateDocumento(item.id, String(localStorage.getItem("profileId")))
  }

  generateDocumento(idReport: string, idProfile: string){
    this.requestDocumento.profile_id = idProfile;
    this.requestDocumento.report_id= idReport;
    this.serviceDocumento.generateDocument(this.requestDocumento, environment.idioma_default).subscribe(
      (resp) =>{
          this.responseDocument = resp;
           if(this.responseDocument.request_id != undefined && this.responseDocument.request_id != ''){
              //this.responseDocument.request_id
              this.delay();
            }else{
              this.indLoading =false;
              this.mensaje =this.VALIDAR_ADMINISTRACION_GENERAR_PDF_SELFDECODE;
            }
      },
        (error) =>{
          this.indLoading =false;
          this.mensaje = error.message;
          console.log(error);
        }
    );
  }


  generate(){
    this.serviceDocumento.getDocument(this.responseDocument.request_id, environment.idioma_default).subscribe(response =>{
      this.responseGetDocument = response; 
      if(this.responseGetDocument.status === 'success'){
        let result = this.responseGetDocument.result != undefined ? this.responseGetDocument.result:"";
        this.url = result != undefined ? result:"";
        this.mensaje =  this.responseGetDocument.message != undefined  && this.url ===""? this.responseGetDocument.message: "" ;
      }
      this.indLoading =false;
      
      
  });
  }

  delay(){
    setTimeout(() => {
      this.generate();
    },CONST_GENCELL.DELAY_GENERAR_DOCUMENTO);
  }

}
