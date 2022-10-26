import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseRecomendationTrait } from '../../../models/response.recomendation.trait';
import { ReponseProfileTrait } from '../../../models/response.profile-trait';
import { ResponseRecomendation } from '../../../models/response.recomendation';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})


export class CardsComponent implements OnInit {
  @Input() id: string=''
  @Input() titulo: string=''
  @Input() subtitle: string=''
  @Input() descripcion: string=''
  @Input() accion: string=''
  @Input() image: string=''
  @Input() responseRecomendation: ResponseRecomendation = new ResponseRecomendation();
  @Input() responseRecomendationTrait?: ResponseRecomendationTrait =  new ResponseRecomendationTrait();
  @Input() reponseProfileTrait?: ReponseProfileTrait = new ReponseProfileTrait();


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    console.log('reponseProfileTrait feedback_choices ' , this.reponseProfileTrait?.trait?.feedback_choices);
    console.log('responseRecomendationTrait ' , this.responseRecomendationTrait);
    console.log('responseRecomendationTrait.satisfied_conditions ' , this.responseRecomendationTrait?.satisfied_conditions?.length);
  }

  onClickRecomendacion(){
    this.router.navigate(['recomendation' , this.id])
  }
  onClickRecomendacionPerfil(){
    this.router.navigate(['recomendation-trait' , this.id])
  }
  onClickRasgoPerfil(){
    this.router.navigate(['profile-trait' , this.id])
  }

}
