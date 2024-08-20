import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertmedecinComponent } from './alertmedecin.component';

describe('AlertmedecinComponent', () => {
  let component: AlertmedecinComponent;
  let fixture: ComponentFixture<AlertmedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertmedecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
