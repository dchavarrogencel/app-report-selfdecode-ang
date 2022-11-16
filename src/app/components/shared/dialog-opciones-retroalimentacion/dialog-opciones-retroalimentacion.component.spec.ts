import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOpcionesRetroalimentacionComponent } from './dialog-opciones-retroalimentacion.component';

describe('DialogOpcionesRetroalimentacionComponent', () => {
  let component: DialogOpcionesRetroalimentacionComponent;
  let fixture: ComponentFixture<DialogOpcionesRetroalimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOpcionesRetroalimentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOpcionesRetroalimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
