import { Component, Inject, Injectable } from '@angular/core';
import { ReportService } from './services/report.services';
import { Report } from './models/report';
import { environment } from '../environments/environment';
import { ConstantLabel } from '../environments/enviroment.label';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'app-report-selfdecode';
 

  constructor() {
  }
  ngOnInit() {
  }

  
}
