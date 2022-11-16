import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRasgoComponent } from './dialog-rasgo.component';

describe('DialogRasgoComponent', () => {
  let component: DialogRasgoComponent;
  let fixture: ComponentFixture<DialogRasgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRasgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRasgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
