import { Component, Input, OnInit } from '@angular/core';
import { ReponseProfileTrait } from '../../../models/response.profile-trait';

@Component({
  selector: 'app-dialog-detalle-profile-trait',
  templateUrl: './dialog-detalle-profile-trait.component.html',
  styleUrls: ['./dialog-detalle-profile-trait.component.css']
})
export class DialogDetalleProfileTraitComponent implements OnInit {
  @Input() reponseProfileTrait?: ReponseProfileTrait = new ReponseProfileTrait();
  constructor() { }

  ngOnInit(): void {
  }

}
