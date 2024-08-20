import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityOrganisateurComponent } from './add-activity-organisateur.component';

describe('AddActivityOrganisateurComponent', () => {
  let component: AddActivityOrganisateurComponent;
  let fixture: ComponentFixture<AddActivityOrganisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActivityOrganisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActivityOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
