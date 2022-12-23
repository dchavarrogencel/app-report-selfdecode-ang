import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
/**
 * Clase encarga de realizar la implementación requerida para el pie de pagina
 * @autor dchavarro
 */
export class FooterComponent implements OnInit {
  @Input() titulo: string =''
  constructor() { }

  ngOnInit(): void {
  }

}
