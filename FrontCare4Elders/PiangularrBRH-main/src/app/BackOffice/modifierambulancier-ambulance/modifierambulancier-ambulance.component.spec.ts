import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierambulancierAmbulanceComponent } from './modifierambulancier-ambulance.component';

describe('ModifierambulancierAmbulanceComponent', () => {
  let component: ModifierambulancierAmbulanceComponent;
  let fixture: ComponentFixture<ModifierambulancierAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierambulancierAmbulanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierambulancierAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
