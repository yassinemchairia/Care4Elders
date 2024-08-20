import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatEventByUserComponent } from './stat-event-by-user.component';

describe('StatEventByUserComponent', () => {
  let component: StatEventByUserComponent;
  let fixture: ComponentFixture<StatEventByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatEventByUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatEventByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
