import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOrdenanceComponent } from './ajouter-ordenance.component';

describe('AjouterOrdenanceComponent', () => {
  let component: AjouterOrdenanceComponent;
  let fixture: ComponentFixture<AjouterOrdenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterOrdenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterOrdenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
