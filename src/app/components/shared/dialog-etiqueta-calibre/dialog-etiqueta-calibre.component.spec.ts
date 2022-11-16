import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEtiquetaCalibreComponent } from './dialog-etiqueta-calibre.component';

describe('DialogEtiquetaCalibreComponent', () => {
  let component: DialogEtiquetaCalibreComponent;
  let fixture: ComponentFixture<DialogEtiquetaCalibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEtiquetaCalibreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEtiquetaCalibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
