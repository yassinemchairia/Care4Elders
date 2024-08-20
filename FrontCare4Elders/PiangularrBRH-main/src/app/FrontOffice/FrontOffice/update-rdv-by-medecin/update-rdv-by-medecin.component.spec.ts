import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRdvByMEdecinComponent } from './update-rdv-by-medecin.component';

describe('UpdateRdvByMEdecinComponent', () => {
  let component: UpdateRdvByMEdecinComponent;
  let fixture: ComponentFixture<UpdateRdvByMEdecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRdvByMEdecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRdvByMEdecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
