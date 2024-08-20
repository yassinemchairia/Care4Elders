import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAffctAmbulanceComponent } from './ajouter-affct-ambulance.component';

describe('AjouterAffctAmbulanceComponent', () => {
  let component: AjouterAffctAmbulanceComponent;
  let fixture: ComponentFixture<AjouterAffctAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAffctAmbulanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterAffctAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
