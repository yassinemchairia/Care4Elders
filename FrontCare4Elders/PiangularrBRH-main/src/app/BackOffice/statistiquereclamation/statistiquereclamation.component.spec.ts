import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquereclamationComponent } from './statistiquereclamation.component';

describe('StatistiquereclamationComponent', () => {
  let component: StatistiquereclamationComponent;
  let fixture: ComponentFixture<StatistiquereclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquereclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiquereclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
