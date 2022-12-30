import { Component, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'app-report-selfdecode';
 

  constructor() {
    localStorage.clear();
  }
  ngOnInit() {

  }

  
}
