import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpHeaderResponse } from '@angular/common/http';
import { concat, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
/**
 * Clase que permite la implementacion del consume de los servicios
 * @author dchavarro
 */
export class ServiceUtils {
  fileExists = false;
  /**
   * Metodo encargado de instanciar los objetos requeridos
   * @param http 
   * @param serviceCookie 
   */
  constructor(private http: HttpClient, private  serviceCookie: CookieService) { }
  /**
   * Metodo encargado de obtener la cabecera requerida para consumir los servicio de selfdecode
   * @param idioma 
   * @returns 
   */
  private getHeader(idioma: string): HttpHeaders {
    const headers = new HttpHeaders({
      'Accept': environment.tipoContenido,
      'Content-Type': environment.tipoContenido,
      'Authorization': environment.autenticacion
     });
    this.serviceCookie.delete('Cookie');
    this.serviceCookie.set('sd-lang' ,idioma);
    return headers;
  }
  /**
   * Metodo encargado de consumir el servicio de tipo post
   * @param endpoint 
   * @param payload 
   * @param idioma 
   * @returns 
   */
  public post(endpoint: string, payload = {}, idioma: string): Observable<any> {
    const headers = this.getHeader(idioma);
    return this.http.post(environment.api_selfdecode + endpoint, payload, { headers, withCredentials: false });
  }
  /**
   * Metodo encargado de consumir el servicio de tipo get
   * @param endpoint 
   * @param query 
   * @param idioma 
   * @returns 
   */
  public get(endpoint: string, query: string, idioma: string): Observable<any> {
    const endpointFinal = endpoint + query;
    const headers = this.getHeader(idioma);
    return this.http.get(environment.api_selfdecode + endpointFinal, { headers,withCredentials: false });
  }
   /**
   * Metodo encargado de consumir el servicio de tipo get para obtener la imagen personalizada
   * @param endpoint 
   * @param query 
   * @param idioma 
   * @returns 
   */
  public getImage(endpoint: string): Observable<any> {
    return this.http.get(environment.url_app+ endpoint);
  }
 /**
   * Metodo encargado de consumir el servicio de descarga del documento pdf
   * @param endpoint 
   * @param query 
   * @param idioma 
   * @returns 
   */
  downloadDocument(url: string) : Observable<Blob>{
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get<Blob>(url, { headers: headers, responseType: 'blob' as 'json' });
  }
}