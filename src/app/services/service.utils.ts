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
      //'Cookie': 'sd-lang=' +idioma,
    });

    return headers;
  }
  public post(endpoint: string, payload = {}, idioma: string): Observable<any> {
    const headers = this.getHeader(idioma);
    console.log('endpoint ' , endpoint);
    console.log('headers ' , headers);
    return this.http.post(endpoint, payload, { headers });
  }

  public get(endpoint: string, query: string, idioma: string): Observable<any> {
    const endpointFinal = endpoint + query;
    const headers = this.getHeader(idioma);
    console.log('endpointFinal ' , endpointFinal);
    console.log('headers ' , headers);
    return this.http.get( endpointFinal, { headers });
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