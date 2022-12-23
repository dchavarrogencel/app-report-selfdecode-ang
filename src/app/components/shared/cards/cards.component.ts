import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseRecomendationTrait } from '../../../models/response.recomendation.trait';
import { ReponseProfileTrait } from '../../../models/response.profile-trait';
import { ResponseRecomendation } from '../../../models/response.recomendation';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
/**
 * Clase encarga de realizar la implementación para las tarjetas utilizadas en los componentes
 * @autor dchavarro
 */
export class CardsComponent implements OnInit {
  @Input() id: string=''
  @Input() titulo: string=''
  @Input() subtitle: string=''
  @Input() descripcion: string=''
  @Input() accion: string=''
  @Input() image: string=''
  @Input() responseRecomendation: ResponseRecomendation = new ResponseRecomendation();
  @Input() responseRecomendationTrait: ResponseRecomendationTrait =  new ResponseRecomendationTrait();
  @Input() reponseProfileTrait?: ReponseProfileTrait = new ReponseProfileTrait();

  @Output() eventEmitir: EventEmitter<ResponseRecomendation>= new EventEmitter<ResponseRecomendation>();

  recomendation: ResponseRecomendation;
  /**
   * Metodo encargado de instanciar los objetos requeridos
   * @param router 
   * @param activatedRoute 
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.recomendation= new ResponseRecomendation();
  }

  ngOnInit(): void {}
  /**
   * Metodo encargo de rediricionar a la pagina de recomendaciones
   */
  onClickRecomendacion(){
    this.router.navigate(['recomendation' , this.id])
  }
  /**
   * Metodo encargo de rediricionar a la pagina de recomendacion de perfil
   */
  onClickRecomendacionPerfil(){
    this.router.navigate(['recomendation-trait' , this.id])
  }
  /**
   * Metodo encargo de rediricionar a la pagina de rasgo de perfil
   */
  onClickRasgoPerfil(){
    this.router.navigate(['profile-trait' , this.id])
  }
   /**
   * Metodo encargo de emitir el evento cuando realizan click en los botones
   */
  onClickEvento(item: any){
    this.eventEmitir.emit(item);
  }

}
