import { Component, Input, OnInit } from '@angular/core';
import { ResponseRecomendation } from '../../../models/response.recomendation';

@Component({
  selector: 'app-dialog-detail-recomendation',
  templateUrl: './dialog-detail-recomendation.component.html',
  styleUrls: ['./dialog-detail-recomendation.component.css']
})
/**
 * Clase encargada de realizar la implementación de modal de detalle de recomendacion
 * @autor dchavarro
 */
export class DialogDetailRecomendationComponent implements OnInit {
  @Input() recomendation: ResponseRecomendation = new ResponseRecomendation();

  constructor() { 
  }

  ngOnInit(): void {
  }

}
