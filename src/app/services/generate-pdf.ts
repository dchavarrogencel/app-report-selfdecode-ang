import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ServiceUtils } from './service.utils';
import { CONST_END_POINT_SELFCODE } from '../../environments/enviroment.variables';
import { RequestDocument } from '../models/RequestDocument';

@Injectable({
    providedIn: 'root'
  })
  export class DocumentoService {
    constructor(private service: ServiceUtils) { }
    getDocument(requestId: string, idioma:string) {
         let query =  '?request_id=' + requestId;
         return this.service.get( CONST_END_POINT_SELFCODE.DOCUMENTO, query,idioma).pipe( map( data => data ));
    }

    generateDocument(request: RequestDocument, idioma:string) {
        return this.service.post( CONST_END_POINT_SELFCODE.DOCUMENTO, request,idioma).pipe( map( data => data ));
    }
  }