import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivityPatientComponent } from './list-activity-patient.component';

describe('ListActivityPatientComponent', () => {
  let component: ListActivityPatientComponent;
  let fixture: ComponentFixture<ListActivityPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActivityPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActivityPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
