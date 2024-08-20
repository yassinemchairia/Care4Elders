import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionreclamationComponent } from './gestionreclamation.component';

describe('GestionreclamationComponent', () => {
  let component: GestionreclamationComponent;
  let fixture: ComponentFixture<GestionreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionreclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
