import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityQualityChartsComponent } from './activity-quality-charts.component';

describe('ActivityQualityChartsComponent', () => {
  let component: ActivityQualityChartsComponent;
  let fixture: ComponentFixture<ActivityQualityChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityQualityChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityQualityChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
