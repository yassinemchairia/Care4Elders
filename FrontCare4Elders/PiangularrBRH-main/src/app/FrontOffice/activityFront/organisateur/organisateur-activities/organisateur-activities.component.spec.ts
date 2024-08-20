import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisateurActivitiesComponent } from './organisateur-activities.component';

describe('OrganisateurActivitiesComponent', () => {
  let component: OrganisateurActivitiesComponent;
  let fixture: ComponentFixture<OrganisateurActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisateurActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisateurActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
