import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailRecomendationComponent } from './dialog-detail-recomendation.component';

describe('DialogDetailRecomendationComponent', () => {
  let component: DialogDetailRecomendationComponent;
  let fixture: ComponentFixture<DialogDetailRecomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetailRecomendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDetailRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
