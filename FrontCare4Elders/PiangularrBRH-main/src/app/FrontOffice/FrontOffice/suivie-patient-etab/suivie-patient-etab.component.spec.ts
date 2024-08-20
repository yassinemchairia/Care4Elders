import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviePatientEtabComponent } from './suivie-patient-etab.component';

describe('SuiviePatientEtabComponent', () => {
  let component: SuiviePatientEtabComponent;
  let fixture: ComponentFixture<SuiviePatientEtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviePatientEtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviePatientEtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
