import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedecinAlertComponent } from './admin-medecin-alert.component';

describe('AdminMedecinAlertComponent', () => {
  let component: AdminMedecinAlertComponent;
  let fixture: ComponentFixture<AdminMedecinAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMedecinAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMedecinAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
