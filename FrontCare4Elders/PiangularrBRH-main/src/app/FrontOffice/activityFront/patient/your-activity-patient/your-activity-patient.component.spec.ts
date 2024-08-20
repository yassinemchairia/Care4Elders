import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourActivityPatientComponent } from './your-activity-patient.component';

describe('YourActivityPatientComponent', () => {
  let component: YourActivityPatientComponent;
  let fixture: ComponentFixture<YourActivityPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourActivityPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourActivityPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
