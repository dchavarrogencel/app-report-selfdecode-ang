import { Component, Input, OnInit } from '@angular/core';
import { ReponseProfileTrait } from '../../../models/response.profile-trait';

@Component({
  selector: 'app-dialog-descargo-responsabilidad',
  templateUrl: './dialog-descargo-responsabilidad.component.html',
  styleUrls: ['./dialog-descargo-responsabilidad.component.css']
})
/**
 * Clase encargada de realizar la implementación de modal de descargo responsabilidad
 * @autor dchavarro
 */
export class DialogDescargoResponsabilidadComponent implements OnInit {
  @Input() reponseProfileTrait?: ReponseProfileTrait = new ReponseProfileTrait();

  constructor() { }

  ngOnInit(): void {
  }

}
