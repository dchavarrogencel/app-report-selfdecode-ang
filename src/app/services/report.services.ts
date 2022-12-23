import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ServiceUtils } from './service.utils';
import { CONST_END_POINT_SELFCODE } from '../../environments/enviroment.variables';

@Injectable({
    providedIn: 'root'
  })
  /**
   * Clase que permite la implementacion del servicio de reporte
   * @author dchavarro
   */
  export class ReportService {
    /**
     * Metodo encargado de instanciar los objetos requeridos 
     * @param service 
     */
    constructor(private service: ServiceUtils) { }
    /**
     * Metodo encargado de obtener el reporte por id
     * @param reportId 
     * @param idioma 
     * @returns 
     */
    getReportById(reportId: string, idioma:string) {
         return this.service.get(CONST_END_POINT_SELFCODE.REPORT_ID , reportId+ "/",idioma).pipe( map( data => data ));
    }
    /**
     * Metodo encargado de obtener los reportes asociado al usuario
     * @param profileId 
     * @param idioma 
     * @returns 
     */
    getReportsStatus(profileId: string,idioma:string) {
      return this.service.get(CONST_END_POINT_SELFCODE.PROFILE_REPORT , profileId, idioma).pipe( map( data => data ));
    }
  }