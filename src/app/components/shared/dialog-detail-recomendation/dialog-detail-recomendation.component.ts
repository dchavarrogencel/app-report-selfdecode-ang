import { Component, Input, OnInit } from '@angular/core';
import { ResponseRecomendation } from '../../../models/response.recomendation';

@Component({
  selector: 'app-dialog-detail-recomendation',
  templateUrl: './dialog-detail-recomendation.component.html',
  styleUrls: ['./dialog-detail-recomendation.component.css']
})
export class DialogDetailRecomendationComponent implements OnInit {
  @Input() recomendation: ResponseRecomendation = new ResponseRecomendation();

  constructor() { 
  }

  ngOnInit(): void {
  }

}
