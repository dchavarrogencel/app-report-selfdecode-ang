import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleRecomendacionTraitComponent } from './dialog-detalle-recomendacion-trait.component';

describe('DialogDetalleRecomendacionTraitComponent', () => {
  let component: DialogDetalleRecomendacionTraitComponent;
  let fixture: ComponentFixture<DialogDetalleRecomendacionTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleRecomendacionTraitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDetalleRecomendacionTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
