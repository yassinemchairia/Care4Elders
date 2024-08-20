import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterreponsereclamationretardComponent } from './ajouterreponsereclamationretard.component';

describe('AjouterreponsereclamationretardComponent', () => {
  let component: AjouterreponsereclamationretardComponent;
  let fixture: ComponentFixture<AjouterreponsereclamationretardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterreponsereclamationretardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterreponsereclamationretardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
