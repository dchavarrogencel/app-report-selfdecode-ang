import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ServiceUtils } from './service.utils';
import { CONST_END_POINT_SELFCODE } from '../../environments/enviroment.variables';

@Injectable({
    providedIn: 'root'
  })
  export class ReportService {
    constructor(private service: ServiceUtils) { }
    getReportById(reportId: string, idioma:string) {
         return this.service.get(CONST_END_POINT_SELFCODE.REPORT_ID , reportId+ "/",idioma).pipe( map( data => data ));
    }

    getReportsStatus(profileId: string,idioma:string) {
      return this.service.get(CONST_END_POINT_SELFCODE.PROFILE_REPORT , profileId, idioma).pipe( map( data => data ));
    }
  }