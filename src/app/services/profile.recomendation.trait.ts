import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ServiceUtils } from './service.utils';
import { CONST_END_POINT_SELFCODE } from '../../environments/enviroment.variables';

@Injectable({
    providedIn: 'root'
  })
  /**
   * Clase que permite la implementacion del servicio de rasgo recomendacion
   * @author dchavarro
   */
  export class RecomendationTraitService {
    /**
     * Metodo encargado de instanciar los objetos requeridos
     * @param service 
     */
    constructor(private service: ServiceUtils) { }
    /**
     * Metodo encargado de obtener la recomendacion de rasgo
     * @param profileReportId 
     * @param idioma 
     * @returns 
     */
    getRecomendationTrait(profileReportId: string, idioma:string) {
         return this.service.get(CONST_END_POINT_SELFCODE.PROFILE_RECOMENDATION_TRAIT , profileReportId,idioma).pipe( map( data => data ));
    }
  }