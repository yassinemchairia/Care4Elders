import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPatEtabComponent } from './modifier-pat-etab.component';

describe('ModifierPatEtabComponent', () => {
  let component: ModifierPatEtabComponent;
  let fixture: ComponentFixture<ModifierPatEtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPatEtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierPatEtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
