import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMorgueComponent } from './ajouter-morgue.component';

describe('AjouterMorgueComponent', () => {
  let component: AjouterMorgueComponent;
  let fixture: ComponentFixture<AjouterMorgueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMorgueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterMorgueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
