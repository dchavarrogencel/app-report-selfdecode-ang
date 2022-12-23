import { Component, Input, OnInit } from '@angular/core';
import { ReponseProfileTrait } from '../../../models/response.profile-trait';

@Component({
  selector: 'app-dialog-rasgo',
  templateUrl: './dialog-rasgo.component.html',
  styleUrls: ['./dialog-rasgo.component.css']
})
/**
 * Clase encargada de realizar la implementación de modal de rasgo
 * @autor dchavarro
 */
export class DialogRasgoComponent implements OnInit {
  @Input() reponseProfileTrait?: ReponseProfileTrait = new ReponseProfileTrait();
  constructor() { }

  ngOnInit(): void {
  }

}
