import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ServiceUtils } from './service.utils';
import { CONST_END_POINT_SELFCODE } from '../../environments/enviroment.variables';
import { RequestDocument } from '../models/requestDocument';
import { environment } from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
  })
  /**
   * Clase que permite la implementacion del servicio de documentos
   * @author dchavarro
   */
  export class DocumentoService {
    /**
     * Metodo encargado de instanciar los objetos requeridos
     * @param service 
     */
    constructor(private service: ServiceUtils) { }
    /**
     * Metodo encargado de obtener el documento por el request id devuelto de generacion
     * @param requestId 
     * @param idioma 
     * @returns 
     */
    getDocument(requestId: string, idioma:string) {
         let query =  '?request_id=' + requestId;
         return this.service.get( CONST_END_POINT_SELFCODE.DOCUMENTO, query,idioma).pipe( map( data => data ));
    }
    /**
     * Metodo encargado de generar el documento pdf
     * @param request 
     * @param idioma 
     * @returns 
     */
    generateDocument(request: RequestDocument, idioma:string) {
        request.lang = idioma;
        return this.service.post( CONST_END_POINT_SELFCODE.DOCUMENTO, request,idioma).pipe( map( data => data ));
    }
  }