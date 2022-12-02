import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecomendationService } from '../../services/profile.recomendation.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseRecomendation } from '../../models/response.recomendation';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent implements OnInit {
  @Input() idProfileReport: string=''
  @Input() lstRecomendations: Array<ResponseRecomendation>  = new Array<ResponseRecomendation>();

  idioma=''
  recomendation: ResponseRecomendation;
  indRecomendation =false;
  indLoading= false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.recomendation= new ResponseRecomendation();
    console.log('params ' , this.activatedRoute.snapshot);
   }

  ngOnInit(): void {
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
    
  }

  onClickActualizarIdioma(e:any){
    console.log('actualizar idioma ' , e)
    this.idioma =e;
    this.lstRecomendations = new Array<ResponseRecomendation>();

  }

  onClickDetailRecomendation(e: any){
    console.log('e ' , e);
    this.recomendation = e;
    console.log('this.recomendation ' , this.recomendation);
    
  }

  onClickVolver(){

  }

}
