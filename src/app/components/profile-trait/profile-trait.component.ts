import { Component, OnInit } from '@angular/core';
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
export class ProfileTraitComponent implements OnInit {

  lstProfileTrait: Array<ReponseProfileTrait>;
  idioma ="";
  idProfileReport: string;

  constructor(private serviceProfileTrait: ProfileTraitService, private activatedRoute: ActivatedRoute) { 
    this.idProfileReport ='';
    this.lstProfileTrait = new Array<ReponseProfileTrait>();
  }

  ngOnInit(): void {
    this.idProfileReport= this.activatedRoute.snapshot.params["idProfileReport"];
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
    this.getRecomendation();
  }

  getRecomendation(){
    this.serviceProfileTrait.getProfileTrait(this.idProfileReport, this.idioma).subscribe(response =>{
      console.log('response ', response);
      this.lstProfileTrait  = response;
      console.log('  this.lstProfileTrait ',   this.lstProfileTrait);
    })
  }

  onClickActualizarIdioma(e:any){
    console.log('actualizar idioma ' , e)
    this.idioma = e;
    this.lstProfileTrait = new Array<ReponseProfileTrait>();
    this.getRecomendation();

  }

}
