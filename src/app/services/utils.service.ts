import { Injectable } from "@angular/core";
import { ServiceUtils } from './service.utils';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class UtilsService {
    constructor(private service: ServiceUtils) { }
    getExistsImage(image: string) {
        return this.service.getImage(image).pipe( map( data => data ));
   }
  }