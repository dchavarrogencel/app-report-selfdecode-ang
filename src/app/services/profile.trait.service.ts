import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ServiceUtils } from './service.utils';
import { CONST_END_POINT_SELFCODE } from '../../environments/enviroment.variables';

@Injectable({
    providedIn: 'root'
  })
  export class ProfileTraitService {
    constructor(private service: ServiceUtils) { }
    getProfileTrait(profileReportId: string, idioma:string) {
         return this.service.get(CONST_END_POINT_SELFCODE.PROFILE_TRAIT , profileReportId,idioma).pipe( map( data => data ));
    }
  }