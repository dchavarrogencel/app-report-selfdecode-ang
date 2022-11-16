import { Component, Input, OnInit } from '@angular/core';
import { ResponseRecomendationTrait } from '../../../models/response.recomendation.trait';

@Component({
  selector: 'app-dialog-detalle-recomendacion-trait',
  templateUrl: './dialog-detalle-recomendacion-trait.component.html',
  styleUrls: ['./dialog-detalle-recomendacion-trait.component.css']
})
export class DialogDetalleRecomendacionTraitComponent implements OnInit {
  @Input() responseRecomendationTrait?: ResponseRecomendationTrait =  new ResponseRecomendationTrait();
  constructor() { }

  ngOnInit(): void {
  }

}
