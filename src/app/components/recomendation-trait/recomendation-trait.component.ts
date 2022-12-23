import { Component, OnInit , Input} from '@angular/core';
import { ResponseRecomendationTrait } from '../../models/response.recomendation.trait';
import { RecomendationTraitService } from '../../services/profile.recomendation.trait';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recomendation-trait',
  templateUrl: './recomendation-trait.component.html',
  styleUrls: ['./recomendation-trait.component.css']
})
/**
 * Clase encarga de realizar la implementación para las recomendaciones de perfil
 * @autor dchavarro
 */
export class RecomendationTraitComponent implements OnInit {
  @Input() idProfileReport: string=''
  @Input() lstRecomendationsTrait: Array<ResponseRecomendationTrait> = new Array<ResponseRecomendationTrait>();

  idioma ="";
  indLoading= false;
  recomendation: ResponseRecomendationTrait;
  /**
   * Metodo encargado de instanciar los objetos requeridos
   * @param activatedRoute 
   */
  constructor(private activatedRoute: ActivatedRoute) {
    this.recomendation = new ResponseRecomendationTrait();
    console.log('params ' , this.activatedRoute.snapshot);
   }
 /**
   * Metodo encargado de obtener el idioma que se haya seleccionado o el por defecto si no existe
  */
  ngOnInit(): void {
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
  }
 /**
   * Metodo encargado de asignar el idioma que se cambio
   * @param e 
   */
  onClickActualizarIdioma(e:any){
    console.log('actualizar idioma ' , e)
    this.idioma = e;
    return ''
  }
  /**
   * Metodo encargado de tomar el recomendacion del perfil seleccionado
   * @param e 
   */
  onClickRecomendationTrait(e: any){
    console.log('e ' , e);
    this.recomendation = e;
    console.log('this.recomendation ' , this.recomendation);
    
  }

}
