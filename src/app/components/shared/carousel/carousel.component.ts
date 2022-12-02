import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { ScriptService } from '../../../services/ScriptService ';
import { Report } from '../../../models/report';
import { Router } from '@angular/router';
import { DocumentoService } from '../../../services/generate-pdf';
import { RequestDocument } from '../../../models/requestDocument';
import { ResponseDocument } from '../../../models/responseDocument';
import { ResponseGetDocument } from '../../../models/responseGetDocument';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { CONST_GENCELL } from '../../../../environments/enviroment.variables';
import { RecomendationService } from '../../../services/profile.recomendation.service';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  VALIDAR_ADMINISTRACION_GENERAR_PDF_SELFDECODE = 'Por favor validar con el administrador el servicio de generar el pdf esta fallando'
  RUTA_BASE_IMAGEN = 'assets/images/';
  EXTENSION_JPG = '.jpg';

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
  indLabelReport =false;

  constructor(private serviceUtils: UtilsService,private router: Router, private serviceDocumento : DocumentoService, private sanitizer: DomSanitizer) { 
    this.report = new Report();
    this.requestDocumento = new RequestDocument();
    this.responseDocument = new ResponseDocument();
    this.responseGetDocument = new ResponseGetDocument();
  }

  ngOnInit(): void {
    console.log("lstReportParam " , this.lstReportParam);
  }

  onClickVerReporte(idReport: any, idProfileReport: any){
    this.getExisteImage(this.RUTA_BASE_IMAGEN + idReport + this.EXTENSION_JPG, idReport);
    this.router.navigate(['report' , idReport,idProfileReport ])
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
      }else{
        this.mensaje =  this.responseGetDocument.message != undefined ? this.responseGetDocument.message:"";
      }
      this.indLoading =false;
      
      
  });
  }

  delay(){
    setTimeout(() => {
      this.generate();
    },CONST_GENCELL.DELAY_GENERAR_DOCUMENTO);
  }

  moveMouseReport(item: Report){
    console.log('entro evento');
    this.indLabelReport = true;
    this.inicializarSeleccionado(item);
  }

  inicializarSeleccionado(item: Report){
    for(let i=0;i<this.lstReportParam.length;i++){
      if(this.lstReportParam[i].id != item.id){
        this.lstReportParam[i].seleccionado =false;
      }else{
        this.lstReportParam[i].seleccionado =true;
      }
    }
  }

  getExisteImage(image: string , reportId: string) {
    this.serviceUtils.getExistsImage(image).subscribe(
      resp => {
        localStorage.setItem(reportId,image);
      },
      error => {
        if (error.status === 200) {
          localStorage.setItem(reportId,image);
        } else {
          localStorage.setItem(reportId,"");
        }
      }
    );
    return '';
  }

}
