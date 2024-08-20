import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageParticipantsComponent } from './average-participants.component';

describe('AverageParticipantsComponent', () => {
  let component: AverageParticipantsComponent;
  let fixture: ComponentFixture<AverageParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageParticipantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
