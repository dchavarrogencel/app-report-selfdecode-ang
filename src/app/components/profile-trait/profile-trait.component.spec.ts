import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTraitComponent } from './profile-trait.component';

describe('ProfileTraitComponent', () => {
  let component: ProfileTraitComponent;
  let fixture: ComponentFixture<ProfileTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTraitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
