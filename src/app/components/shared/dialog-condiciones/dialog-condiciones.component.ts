import { Component, Input, OnInit } from '@angular/core';
import { ResponseRecomendationTrait } from '../../../models/response.recomendation.trait';

@Component({
  selector: 'app-dialog-condiciones',
  templateUrl: './dialog-condiciones.component.html',
  styleUrls: ['./dialog-condiciones.component.css']
})
export class DialogCondicionesComponent implements OnInit {

  @Input() responseRecomendationTrait?: ResponseRecomendationTrait =  new ResponseRecomendationTrait();

  constructor() { }

  ngOnInit(): void {
  }

}
