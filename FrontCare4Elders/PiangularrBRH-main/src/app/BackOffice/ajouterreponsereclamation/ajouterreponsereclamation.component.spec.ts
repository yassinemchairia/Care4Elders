import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterreponsereclamationComponent } from './ajouterreponsereclamation.component';

describe('AjouterreponsereclamationComponent', () => {
  let component: AjouterreponsereclamationComponent;
  let fixture: ComponentFixture<AjouterreponsereclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterreponsereclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterreponsereclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
