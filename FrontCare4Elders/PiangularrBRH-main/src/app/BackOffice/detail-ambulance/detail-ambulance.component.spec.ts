import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAmbulanceComponent } from './detail-ambulance.component';

describe('DetailAmbulanceComponent', () => {
  let component: DetailAmbulanceComponent;
  let fixture: ComponentFixture<DetailAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAmbulanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
