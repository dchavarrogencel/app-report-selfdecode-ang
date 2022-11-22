import { Component, Input, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.services';
import { Report } from '../../models/report';
import { environment } from '../../../environments/environment';
import { Card } from '../../models/card';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { RequestDocument } from '../../models/requestDocument';
import { ResponseDocument } from '../../models/responseDocument';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  RUTA_BASE_IMAGEN = 'assets/images/';
  EXTENSION_JPG = '.jpg';
  VER_ACCIONES='Ver acciones';
  report: Report;
  card: Card;
  lstReports: Array<Report>;
  indRespuesta = false;
  indSeleccionado='';
  indLoading= false;
  longitud =0;
  requestDocumento: RequestDocument;
  responseDocument: ResponseDocument;

  constructor(private serviceReport: ReportService, private activatedRoute: ActivatedRoute, private serviceUtils: UtilsService) {
    console.log('constructor home');
    this.requestDocumento = new RequestDocument();
    this.responseDocument = new ResponseDocument();
    localStorage.setItem('profileId', this.activatedRoute.snapshot.params["profileId"]);
    this.card = new Card();
    this.report = new Report();
    this.lstReports = new Array<Report>();
    console.log('fin constrcutor');
  }
  ngOnInit() {
    console.log('constructor ngOnInit');
    this.getReportsStatus(this.activatedRoute.snapshot.params["profileId"], localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")) : environment.idioma_default);
    console.log('fin ngOnInit');
  }


  getReportById(idReport: string, idProfileReport: string, idioma: string, status: Boolean) {
    this.serviceReport.getReportById(idReport, idioma).subscribe(response => {
      response.idProfileReport = idProfileReport;
      response.status = status;
      if (localStorage.getItem(idReport) != undefined && localStorage.getItem(idReport) != "") {
        response.image = localStorage.getItem(idReport);
      } else {
        response.image =  '';
      }
      response.id= idReport;
      this.lstReports.push(response);
      localStorage.removeItem(idReport);
      localStorage.removeItem(idReport+idProfileReport);
    })
  }

  getReportsStatus(idProfile: string, idioma: string) {
    this.indLoading=true;
    this.serviceReport.getReportsStatus(idProfile, idioma).subscribe(response => {
      this.longitud = response.length;
      for (let i = 0; i < response.length; i++) {
        this.getExisteImage(this.RUTA_BASE_IMAGEN + response[i].report_id + this.EXTENSION_JPG, response[i].report_id);
        this.getReportById(response[i].report_id, response[i].id, idioma, response[i].status);
        this.indLoading=false;
       
      }
      if(this.lstReports.length>2){
        this.indRespuesta= true;
      }
    })
    
  }

  onClickActualizarIdioma(e: any) {
    console.log('actualizar idioma ', e)
    console.log('params home ', this.activatedRoute.snapshot);
    this.lstReports = new Array<Report>();
    this.getReportsStatus(this.activatedRoute.snapshot.params["profileId"], e);
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

  onClickHabilitarAcciones(item: Report){
    console.log('Ingreso al evento' );
    this.inicializarSeleccionado(item);
  }
  inicializarSeleccionado(item: Report){
    for(let i=0;i<this.lstReports.length;i++){
      if(this.lstReports[i].id != item.id){
        this.lstReports[i].seleccionado ='';
      }else{
        this.lstReports[i].seleccionado ='checked';
      }
    }
  }

 
}
