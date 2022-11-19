import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorDocumentoComponent } from './visor-documento.component';

describe('VisorDocumentoComponent', () => {
  let component: VisorDocumentoComponent;
  let fixture: ComponentFixture<VisorDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisorDocumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
