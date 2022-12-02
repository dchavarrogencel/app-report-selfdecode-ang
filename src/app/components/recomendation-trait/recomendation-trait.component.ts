import { Component, OnInit , Input} from '@angular/core';
import { ResponseRecomendationTrait } from '../../models/response.recomendation.trait';
import { RecomendationTraitService } from '../../services/profile.recomendation.trait';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recomendation-trait',
  templateUrl: './recomendation-trait.component.html',
  styleUrls: ['./recomendation-trait.component.css']
})
export class RecomendationTraitComponent implements OnInit {
  @Input() idProfileReport: string=''
  @Input() lstRecomendationsTrait: Array<ResponseRecomendationTrait> = new Array<ResponseRecomendationTrait>();

  idioma ="";
  indLoading= false;
  recomendation: ResponseRecomendationTrait;
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.recomendation = new ResponseRecomendationTrait();
    console.log('params ' , this.activatedRoute.snapshot);
   }

  ngOnInit(): void {
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
  }

  onClickActualizarIdioma(e:any){
    console.log('actualizar idioma ' , e)
    this.idioma = e;
  }

  onClickRecomendationTrait(e: any){
    console.log('e ' , e);
    this.recomendation = e;
    console.log('this.recomendation ' , this.recomendation);
    
  }

}
