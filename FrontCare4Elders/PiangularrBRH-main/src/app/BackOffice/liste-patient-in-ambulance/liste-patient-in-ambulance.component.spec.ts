import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientInAmbulanceComponent } from './liste-patient-in-ambulance.component';

describe('ListePatientInAmbulanceComponent', () => {
  let component: ListePatientInAmbulanceComponent;
  let fixture: ComponentFixture<ListePatientInAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePatientInAmbulanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePatientInAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
