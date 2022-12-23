import { Component, Input, OnInit } from '@angular/core';
import { ReponseProfileTrait } from '../../../models/response.profile-trait';

@Component({
  selector: 'app-dialog-detalle-profile-trait',
  templateUrl: './dialog-detalle-profile-trait.component.html',
  styleUrls: ['./dialog-detalle-profile-trait.component.css']
})
/**
 * Clase encargada de realizar la implementación de modal de detalle de rasgo de perfil
 * @autor dchavarro
 */
export class DialogDetalleProfileTraitComponent implements OnInit {
  @Input() reponseProfileTrait?: ReponseProfileTrait = new ReponseProfileTrait();
  constructor() { }

  ngOnInit(): void {
  }

}
