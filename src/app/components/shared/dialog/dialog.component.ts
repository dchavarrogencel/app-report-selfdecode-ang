import { Component, Input, OnInit } from '@angular/core';
import { Report } from '../../../models/report';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
/**
 * Clase encargada de realizar la implementación de modal
 * @autor dchavarro
 */
export class DialogComponent implements OnInit {
  @Input() report: Report = new  Report();
  @Input() title: string =''
  constructor() {
   }

  ngOnInit(): void {
  }

}
