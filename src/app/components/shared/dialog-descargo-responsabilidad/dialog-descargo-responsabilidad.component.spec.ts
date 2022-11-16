import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDescargoResponsabilidadComponent } from './dialog-descargo-responsabilidad.component';

describe('DialogDescargoResponsabilidadComponent', () => {
  let component: DialogDescargoResponsabilidadComponent;
  let fixture: ComponentFixture<DialogDescargoResponsabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDescargoResponsabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDescargoResponsabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
