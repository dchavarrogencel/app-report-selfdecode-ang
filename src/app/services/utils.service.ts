import { Injectable } from "@angular/core";
import { ServiceUtils } from './service.utils';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  /**
   * Clase que permite la implementacion de un servicio utiles
   * @author dchavarro
   */
  export class UtilsService {
    /**
     * Metodo encargado de instanciar los servicioss
     * @param service 
     */
    constructor(private service: ServiceUtils) { }
    /**
     * Metodo encargado de buscar si existe la imagen
     * @param image 
     * @returns 
     */
    getExistsImage(image: string) {
        return this.service.getImage(image).pipe( map( data => data ));
    }
  }