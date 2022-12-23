import { Component, Input, OnInit } from '@angular/core';
import { ReponseProfileTrait } from '../../../models/response.profile-trait';

@Component({
  selector: 'app-dialog-etiqueta-calibre',
  templateUrl: './dialog-etiqueta-calibre.component.html',
  styleUrls: ['./dialog-etiqueta-calibre.component.css']
})
/**
 * Clase encargada de realizar la implementación de modal de etiqueta calibre
 * @autor dchavarro
 */
export class DialogEtiquetaCalibreComponent implements OnInit {

  @Input() reponseProfileTrait?: ReponseProfileTrait = new ReponseProfileTrait();

  constructor() { }

  ngOnInit(): void {
  }

}
