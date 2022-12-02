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
export class ProfileTraitComponent implements OnInit {
  @Input() idProfileReport: string=''
  @Input() lstProfileTrait: Array<ReponseProfileTrait> = new Array<ReponseProfileTrait>();

  idioma ="";
  indLoading= false;
  profile: ReponseProfileTrait;

  constructor( private activatedRoute: ActivatedRoute) { 
    this.profile= new ReponseProfileTrait();
  }

  ngOnInit(): void {
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
  }

  onClickActualizarIdioma(e:any){
    console.log('actualizar idioma ' , e)
    this.idioma = e;
  }

  onClickProfileTrait(e: any){
    console.log('e ' , e);
    this.profile = e;
  }

}
