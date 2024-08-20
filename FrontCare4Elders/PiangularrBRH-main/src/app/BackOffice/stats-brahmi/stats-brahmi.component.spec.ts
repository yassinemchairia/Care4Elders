import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBrahmiComponent } from './stats-brahmi.component';

describe('StatsBrahmiComponent', () => {
  let component: StatsBrahmiComponent;
  let fixture: ComponentFixture<StatsBrahmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsBrahmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsBrahmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
