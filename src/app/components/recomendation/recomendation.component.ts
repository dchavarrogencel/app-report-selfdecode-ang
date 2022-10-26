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
  lstRecomendations: Array<ResponseRecomendation>;
  idProfileReport: string;
  idioma=''
  constructor(private serviceRecomendation: RecomendationService, private activatedRoute: ActivatedRoute) {
    this.idProfileReport ='';
    this.lstRecomendations = new Array<ResponseRecomendation>();
    console.log('params ' , this.activatedRoute.snapshot);
   }

  ngOnInit(): void {
    this.idProfileReport= this.activatedRoute.snapshot.params["idProfileReport"];
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
    this.getRecomendation();
  }

  getRecomendation(){
    this.serviceRecomendation.getRecomendation(this.idProfileReport, this.idioma).subscribe(response =>{
      console.log('response ', response);
      this.lstRecomendations  = response;
      console.log('  this.lstRecomendations ',   this.lstRecomendations);
    })
  }

  onClickActualizarIdioma(e:any){
    console.log('actualizar idioma ' , e)
    this.idioma =e;
    this.lstRecomendations = new Array<ResponseRecomendation>();
    this.getRecomendation();

  }

  onClickVolver(){

  }

}
