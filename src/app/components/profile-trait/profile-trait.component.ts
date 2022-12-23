import { Component, OnInit,Input } from '@angular/core';
import { RecomendationTraitService } from '../../services/profile.recomendation.trait';
import { ActivatedRoute } from '@angular/router';
import { ReponseProfileTrait } from '../../models/response.profile-trait';
import { environment } from '../../../environments/environment';
import { ProfileTraitService } from '../../services/profile.trait.service';

@Component({
  selector: 'app-profile-trait',
  templateUrl: './profile-trait.component.html',
  styleUrls: ['./profile-trait.component.css']
})
/**
 * Clase encarga de realizar la implementación para perfil de riesgo
 * @autor dchavarro
 */
export class ProfileTraitComponent implements OnInit {
  @Input() idProfileReport: string=''
  @Input() lstProfileTrait: Array<ReponseProfileTrait> = new Array<ReponseProfileTrait>();

  idioma ="";
  indLoading= false;
  profile: ReponseProfileTrait;
  /**
   * Metodo encargardo de instanciar los objetos requeridos
   * @param activatedRoute 
   */
  constructor( private activatedRoute: ActivatedRoute) { 
    this.profile= new ReponseProfileTrait();
  }
  /**
   * Metodo encargado de obtener el idioma que se haya seleccionado o el por defecto si no existe
   */
  ngOnInit(): void {
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
  }
  /**
   * Metodo encargado de asignar el idioma que se cambio
   * @param e 
   */
  onClickActualizarIdioma(e:any){
    console.log('actualizar idioma ' , e)
    this.idioma = e;
  }
  /**
   * Metodo encargado de tomar el perfil de riesgo selecionado
   * @param e 
   */
  onClickProfileTrait(e: any){
    console.log('e ' , e);
    this.profile = e;
  }

}
