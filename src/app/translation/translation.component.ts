import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
  
  @Output() eventIdioma:EventEmitter<any> = new EventEmitter<any>();
  @Output() idioma:string ='';
  constructor(
    private translate: TranslateService
  ) {
    
  }
  ngOnInit() {
    console.log('idioma translate  ' , localStorage.getItem("idioma"));
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
    this.translate.setDefaultLang(this.idioma);
    this.translate.use(this.idioma);
  }
  public cambiarLenguaje( e: any) {
    console.log("selecciono" , e);
    console.log("selecciono" , e.target.value);
    localStorage.setItem("idioma" , e.target.value);
    this.translate.use(e.target.value);
    this.idioma=e.target.value;
    this.eventIdioma.emit(e.target.value);
  }
}