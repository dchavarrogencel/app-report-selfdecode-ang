import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Clase encarga de realizar la implementación requerida para la cabecera
 * @autor dchavarro
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string =''
  @Input() nameButtonBack: string = '';
  @Output() eventIdioma:EventEmitter<any> = new EventEmitter<any>();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  /**
   * Metodo encargar de producir un evento para enviar al componente del idioma
   * @param e evento producido
   */
  actualizarIdioma(e:any){
    console.log('actualizarIdioma ' , e);
    this.eventIdioma.emit(e);
  }
  /**
   * Metodo encargado de regresar a la pagina de inicio
   */
  onClickVolver(){
    this.router.navigate(['home' , localStorage.getItem("profileId")])
  }
}
