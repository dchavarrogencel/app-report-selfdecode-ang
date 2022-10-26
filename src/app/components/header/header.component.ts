import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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

  actualizarIdioma(e:any){
    console.log('actualizarIdioma ' , e);
    this.eventIdioma.emit(e);
  }
  onClickVolver(){
    this.router.navigate(['home' , localStorage.getItem("profileId")])
  }
}
