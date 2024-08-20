import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeathPatientComponent } from './liste-death-patient.component';

describe('ListeDeathPatientComponent', () => {
  let component: ListeDeathPatientComponent;
  let fixture: ComponentFixture<ListeDeathPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeathPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDeathPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
