import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsAndBadgeComponent } from './ratings-and-badge.component';

describe('RatingsAndBadgeComponent', () => {
  let component: RatingsAndBadgeComponent;
  let fixture: ComponentFixture<RatingsAndBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsAndBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsAndBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
