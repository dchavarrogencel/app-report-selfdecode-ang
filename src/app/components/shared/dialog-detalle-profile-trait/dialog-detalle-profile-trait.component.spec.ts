import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleProfileTraitComponent } from './dialog-detalle-profile-trait.component';

describe('DialogDetalleProfileTraitComponent', () => {
  let component: DialogDetalleProfileTraitComponent;
  let fixture: ComponentFixture<DialogDetalleProfileTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleProfileTraitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDetalleProfileTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
