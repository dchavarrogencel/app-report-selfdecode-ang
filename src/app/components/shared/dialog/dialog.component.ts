import { Component, Input, OnInit } from '@angular/core';
import { Report } from '../../../models/report';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() report: Report = new  Report();
  @Input() title: string =''
  constructor() {
   }

  ngOnInit(): void {
  }

}
