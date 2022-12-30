import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { Report } from '../../../models/report';
import { Router } from '@angular/router';
import { DocumentoService } from '../../../services/generate-pdf';
import { RequestDocument } from '../../../models/requestDocument';
import { ResponseDocument } from '../../../models/responseDocument';
import { ResponseGetDocument } from '../../../models/responseGetDocument';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { CONST_GENCELL } from '../../../../environments/enviroment.variables';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
/**
 * Clase encargada de realizar la implementación para las tarjetas utilizadas en los componentes
 * @autor dchavarro
 */
export class CarouselComponent implements OnInit {
  VALIDAR_ADMINISTRACION_GENERAR_PDF_SELFDECODE = 'Por favor validar con el administrador el servicio de generar el pdf esta fallando'
  RUTA_BASE_IMAGEN = 'assets/images/';
  MINIATURAS = 'miniaturas/';
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
  /**
   * Metodo encargadod de instanciar todo los objetos requeridos
   * @param serviceUtils 
   * @param router 
   * @param serviceDocumento 
   * @param sanitizer 
   */
  constructor(private serviceUtils: UtilsService,private router: Router, private serviceDocumento : DocumentoService, private sanitizer: DomSanitizer) { 
    this.report = new Report();
    this.requestDocumento = new RequestDocument();
    this.responseDocument = new ResponseDocument();
    this.responseGetDocument = new ResponseGetDocument();
  }

  ngOnInit(): void {
  }
  /**
   * Metodo encargado de redirigir a la pantalla de vizualizar los detalle de reporte
   * @param idReport 
   * @param idProfileReport 
   */
  onClickVerReporte(idReport: any, idProfileReport: any){
    this.getExisteImage(this.RUTA_BASE_IMAGEN + idReport + this.EXTENSION_JPG, idReport);
    this.router.navigate(['report' , idReport,idProfileReport ])
  }
  /**
   * Metodo encargado de redirigir a la recomendacion
   * @param id 
   */
  onClickRecomendacion(id: any) {
    this.router.navigate(['recomendation', id])
  }
  /**
   * Metodo encargado de redirigir a la recomendacion de perfil
   * @param id 
   */
  onClickRecomendacionPerfil(id: any) {
    this.router.navigate(['recomendation-trait', id])
  }
   /**
   * Metodo encargado de redirigir a la rasgo de perfil
   * @param id 
   */
  onClickRasgoPerfil(id: any) {
    this.router.navigate(['profile-trait', id])
  }
   /**
   * Metodo encargado de obtener el reporte a ver el detalle 
   * @param item 
   */
  onClickDetailModal(item: any) {
    this.report = item;
  }
  /**
   * Metodo encargado de consumir el servicio para generar el documento
   * @param item 
   */
  onClickVerDocumento(item: Report){
    this.indLoading =true;
    this.mensaje ='';
    this.url ='';
    this.nameFile = item.name +".pdf";
    this.generateDocumento(item.id, String(localStorage.getItem("profileId")))
  }
  /**
   * Metodo encargado de generar el documento del reporte en selfdecode
   * @param idReport 
   * @param idProfile 
   */
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
  /**
   * Metodo encargado de obtener el documento generado
   */
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
  /**
   * Se le agrega un delay para poder realizar la generacion del documento
   */
  delay(){
    setTimeout(() => {
      this.generate();
    },CONST_GENCELL.DELAY_GENERAR_DOCUMENTO);
  }
  /**
   * Metodo encargado de tomar el evento de mover mouse para el boton de generar documento
   * @param item 
   */
  moveMouseReport(item: Report){
    console.log('entro evento');
    this.inicializarSeleccionado(item);
  }
  /**
   * Inicializar seleccion de todos los reportes
   */
  inicializarSeleccionadoReports(){
    for(let i=0;i<this.lstReportParam.length;i++){
      this.lstReportParam[i].seleccionado =false;
    }
  }
/**
   * Inicializar seleccion de los reportes que no se el actual
   */
  inicializarSeleccionado(item: Report){
    for(let i=0;i<this.lstReportParam.length;i++){
      if(this.lstReportParam[i].id != item.id){
        this.lstReportParam[i].seleccionado =false;
      }else{
        this.lstReportParam[i].seleccionado =true;
      }
    }
  }
  /**
   * Validar si existe la imagen asociada al reporte
   * @param image 
   * @param reportId 
   * @returns 
   */
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
