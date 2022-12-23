import { Component, Input, OnInit } from '@angular/core';
import { ReponseProfileTrait } from '../../../models/response.profile-trait';

@Component({
  selector: 'app-dialog-opciones-retroalimentacion',
  templateUrl: './dialog-opciones-retroalimentacion.component.html',
  styleUrls: ['./dialog-opciones-retroalimentacion.component.css']
})
/**
 * Clase encargada de realizar la implementación de modal de opciones de retroalimentacion
 * @autor dchavarro
 */
export class DialogOpcionesRetroalimentacionComponent implements OnInit {
  @Input() reponseProfileTrait?: ReponseProfileTrait = new ReponseProfileTrait();

  constructor() { }

  ngOnInit(): void {
  }

}
