import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecomendationService } from '../../services/profile.recomendation.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseRecomendation } from '../../models/response.recomendation';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
/**
 * Clase encarga de realizar la implementación para las recomendaciones
 * @autor dchavarro
 */
export class RecomendationComponent implements OnInit {
  @Input() idProfileReport: string=''
  @Input() lstRecomendations: Array<ResponseRecomendation>  = new Array<ResponseRecomendation>();

  idioma=''
  recomendation: ResponseRecomendation;
  indRecomendation =false;
  indLoading= false;
  /**
   * Metodo encargado de instanciar los objetos requeridos
   * @param activatedRoute 
   */
  constructor(private activatedRoute: ActivatedRoute) {
    this.recomendation= new ResponseRecomendation();
    console.log('params ' , this.activatedRoute.snapshot);
   }
  /**
   * Metodo encargado de obtener el idioma que se haya seleccionado o el por defecto si no existe
   */
  ngOnInit(): void {
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
  }
  /**
   * Metodo encargado de actualizar el idioma seleccionado
   * @param e 
   */
  onClickActualizarIdioma(e:any){
    console.log('actualizar idioma ' , e)
    this.idioma =e;
    this.lstRecomendations = new Array<ResponseRecomendation>();

  }
  /**
   * Metodo encargado de obtener la recomendacion selecionada
   * @param e 
   */
  onClickDetailRecomendation(e: any){
    console.log('e ' , e);
    this.recomendation = e;
    console.log('this.recomendation ' , this.recomendation);
    
  }

}
