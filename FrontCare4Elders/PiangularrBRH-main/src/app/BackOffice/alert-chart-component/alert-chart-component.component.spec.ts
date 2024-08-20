import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertChartComponentComponent } from './alert-chart-component.component';

describe('AlertChartComponentComponent', () => {
  let component: AlertChartComponentComponent;
  let fixture: ComponentFixture<AlertChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertChartComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
