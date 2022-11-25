import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpHeaderResponse } from '@angular/common/http';
import { concat, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ServiceUtils {
  fileExists = false;
  constructor(private http: HttpClient, private  serviceCookie: CookieService) { }
  private getHeader(idioma: string): HttpHeaders {
    const headers = new HttpHeaders({
      'Accept': environment.tipoContenido,
      'Content-Type': environment.tipoContenido,
      'Authorization': environment.autenticacion,
      'Access-Control-Allow-Origin': '*',
      //'idioma': idioma
      //'cookie': 'sd-lang=' +idioma,
    });
    this.serviceCookie.delete('Cookie');
    this.serviceCookie.set('sd-lang' ,idioma);
    return headers;
  }
  public post(endpoint: string, payload = {}, idioma: string): Observable<any> {
    const headers = this.getHeader(idioma);
    return this.http.post( endpoint, payload, { headers, withCredentials: true });
  }

  public get(endpoint: string, query: string, idioma: string): Observable<any> {
    const endpointFinal = endpoint + query;
    const headers = this.getHeader(idioma);
    return this.http.get( endpointFinal, { headers,withCredentials: true });
  }

  public getImage(endpoint: string): Observable<any> {
    return this.http.get(environment.url_app+ endpoint);
  }

  downloadDocument(url: string) : Observable<Blob>{
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get<Blob>(url, { headers: headers, responseType: 'blob' as 'json' });
  }
}