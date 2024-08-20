import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientParInfEtabComponent } from './liste-patient-par-inf-etab.component';

describe('ListePatientParInfEtabComponent', () => {
  let component: ListePatientParInfEtabComponent;
  let fixture: ComponentFixture<ListePatientParInfEtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePatientParInfEtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePatientParInfEtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
