import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
/**
 * Clase que permite realizar la traduccion de la pagina
 * @author dchavarro
 */
export class TranslationComponent implements OnInit {
  
  @Output() eventIdioma:EventEmitter<any> = new EventEmitter<any>();
  @Output() idioma:string ='';
  /**
   * Metodo encargado de instanciar los objetos requeridos
   * @param translate 
   */
  constructor(
    private translate: TranslateService
  ) {
    
  }
  /**
   * Metodo encargado de asignar el idioma
   */
  ngOnInit() {
    console.log('idioma translate  ' , localStorage.getItem("idioma"));
    this.idioma = localStorage.getItem("idioma") != null ? String(localStorage.getItem("idioma")):environment.idioma_default;
    this.translate.setDefaultLang(this.idioma);
    this.translate.use(this.idioma);
  }
  /**
   * Metodo encargado de detectar el cambio de idioma y producir el evento para que las otras paginas la utilizen
   * @param e 
   */
  public cambiarLenguaje( e: any) {
    console.log("selecciono" , e);
    console.log("selecciono" , e.target.value);
    localStorage.setItem("idioma" , e.target.value);
    this.translate.use(e.target.value);
    this.idioma=e.target.value;
    this.eventIdioma.emit(e.target.value);
  }
}