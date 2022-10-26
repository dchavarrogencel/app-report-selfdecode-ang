import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationTraitComponent } from './recomendation-trait.component';

describe('RecomendationTraitComponent', () => {
  let component: RecomendationTraitComponent;
  let fixture: ComponentFixture<RecomendationTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendationTraitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendationTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
