import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMedecinsComponent } from './afficher-medecins.component';

describe('AfficherMedecinsComponent', () => {
  let component: AfficherMedecinsComponent;
  let fixture: ComponentFixture<AfficherMedecinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherMedecinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
