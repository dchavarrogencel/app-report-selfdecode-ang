import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpHeaderResponse } from '@angular/common/http';
import { concat, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceUtils {
  fileExists = false;
  constructor(private http: HttpClient) { }
  private getHeader(idioma: string): HttpHeaders {
    const headers = new HttpHeaders({
      'Accept': environment.tipoContenido,
      'Content-Type': environment.tipoContenido,
      'Authorization': environment.autenticacion,
      'Access-Control-Allow-Origin': '*',
      'idioma': idioma
    });

    return headers;
  }
  public post(endpoint: string, payload = {}, idioma: string): Observable<any> {
    const headers = this.getHeader(idioma);
    return this.http.post(environment.api_selfdecode + endpoint, payload, { headers });
  }

  public get(endpoint: string, query: string, idioma: string): Observable<any> {
    const endpointFinal = endpoint + query;
    const headers = this.getHeader(idioma);
    return this.http.get(environment.api_selfdecode + endpointFinal, { headers });
  }

  public getImage(endpoint: string): Observable<any> {
    return this.http.get(environment.url_app+ endpoint);
  }
}