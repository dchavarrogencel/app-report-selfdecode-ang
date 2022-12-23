import { Component, OnInit, Input } from '@angular/core';
import { Report } from '../../models/report';
import { ReportService } from '../../services/report.services';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import { UtilsService } from '../../services/utils.service';
import { ResponseRecomendation } from '../../models/response.recomendation';
import { RecomendationService } from '../../services/profile.recomendation.service';
import { RecomendationTraitService } from '../../services/profile.recomendation.trait';
import { ResponseRecomendationTrait } from '../../models/response.recomendation.trait';
import { ReponseProfileTrait } from '../../models/response.profile-trait';
import { ProfileTraitService } from '../../services/profile.trait.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
/**
 * Clase encargada de realizar la implementación de detalle del reporte
 * @autor dchavarro
 */
export class ViewReportComponent implements OnInit {

  report: Report = new Report();
  idioma: string;
  idReport:  string;
  idProfileReport:  string;
  lstRecomendations: Array<ResponseRecomendation>;
  lstRecomendationsTrait: Array<ResponseRecomendationTrait>;
  lstProfileTrait: Array<ReponseProfileTrait>;
  /**
   * Metodo encargado de instanciar objetos requeridos y los servicios
   * @param serviceProfileTrait 
   * @param serviceRecomendationTrait 
   * @param serviceRecomendation 
   * @param serviceReport 
   * @param activatedRoute 
   * @param serviceUtils 
   */
  constructor(private serviceProfileTrait: ProfileTraitService,private serviceRecomendationTrait: RecomendationTraitService,private serviceRecomendation: RecomendationService,private serviceReport: ReportService, private activatedRoute: ActivatedRoute, private serviceUtils: UtilsService) { 
    console.log('params ' , this.activatedRoute.snapshot);
    this.idioma =  localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")) : environment.idioma_default;
    this.idProfileReport =this.activatedRoute.snapshot.params["idProfileReport"]; 
    this.idReport = this.activatedRoute.snapshot.params["idReport"];
    this.lstRecomendations = new Array<ResponseRecomendation>();
    this.lstRecomendationsTrait = new Array<ResponseRecomendationTrait>();
    this.lstProfileTrait = new Array<ReponseProfileTrait>();
    this.getReportId();
    this.getRecomendation();
    this.getRecomendationTrait();
    this.getRecomendationProfileTrait();
  }

  ngOnInit(): void {
  }
  /**
   * Metodo encargado de obtener las recomendaciones asociada al paciente
   */
  getRecomendation(){
    this.serviceRecomendation.getRecomendation(this.idProfileReport, this.idioma).subscribe(response =>{
      this.lstRecomendations  = response;
      for(let i=0;i<this.lstRecomendations.length;i++){
          console.log('effect: ' , this.lstRecomendations[i].effect*100);
      }
    })
  }
  /**
   * Metodo encargado de obtener los reporte por id
   */
  getReportId(){
    this.serviceReport.getReportById(this.idReport, this.idioma).subscribe(response => {
      this.report = response;
      this.report.image = String(localStorage.getItem(this.idReport));
    });
  }
  /**
   * Metodo encargado de actualizar el idioma y invocar los servicios con el nuevo el idioma
   * @param e 
   */
  onClickActualizarIdioma(e:any){
    console.log('actualizar idioma ' , e)
    this.idioma =e;
    this.report = new Report();
    this.getReportId();
    this.getRecomendation();
    this.getRecomendationTrait();
    this.getRecomendationProfileTrait();

  }
  /**
   * Metodo encargado de obtener las recomendacion del perfil
   */
  getRecomendationTrait(){
    this.serviceRecomendationTrait.getRecomendationTrait(this.idProfileReport, this.idioma).subscribe(response =>{
      this.lstRecomendationsTrait  = response;
    })
  }
  /**
   * Metodo encargado de la recomendacion de perfil de rasgo
   */
  getRecomendationProfileTrait(){
    this.serviceProfileTrait.getProfileTrait(this.idProfileReport, this.idioma).subscribe(response =>{
      this.lstProfileTrait  = response;
    })
  }

}
