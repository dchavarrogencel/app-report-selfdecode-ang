import { Component, OnInit } from '@angular/core';
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

  idioma ="";
  lstRecomendationsTrait: Array<ResponseRecomendationTrait>;
  idProfileReport: string;
  
  constructor(private serviceRecomendation: RecomendationTraitService, private activatedRoute: ActivatedRoute) {
    this.idProfileReport ='';
    this.lstRecomendationsTrait = new Array<ResponseRecomendationTrait>();
    console.log('params ' , this.activatedRoute.snapshot);
   }

  ngOnInit(): void {
    this.idProfileReport= this.activatedRoute.snapshot.params["idProfileReport"];
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
    this.getRecomendation();
  }

  getRecomendation(){
    this.serviceRecomendation.getRecomendationTrait(this.idProfileReport, this.idioma).subscribe(response =>{
      console.log('response ', response);
      this.lstRecomendationsTrait  = response;
      console.log('  this.lstRecomendations ',   this.lstRecomendationsTrait);
    })
  }

  onClickActualizarIdioma(e:any){
    console.log('actualizar idioma ' , e)
    this.idioma = e;
    this.lstRecomendationsTrait = new Array<ResponseRecomendationTrait>();
    this.getRecomendation();

  }

}