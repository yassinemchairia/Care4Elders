import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAmbulancierComponent } from './ajouter-ambulancier.component';

describe('AjouterAmbulancierComponent', () => {
  let component: AjouterAmbulancierComponent;
  let fixture: ComponentFixture<AjouterAmbulancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAmbulancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterAmbulancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
