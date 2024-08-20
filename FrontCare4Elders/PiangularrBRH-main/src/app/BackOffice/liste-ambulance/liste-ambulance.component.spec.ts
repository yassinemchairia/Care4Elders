import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAmbulanceComponent } from './liste-ambulance.component';

describe('ListeAmbulanceComponent', () => {
  let component: ListeAmbulanceComponent;
  let fixture: ComponentFixture<ListeAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAmbulanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
