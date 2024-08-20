import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmbulancierComponent } from './update-ambulancier.component';

describe('UpdateAmbulancierComponent', () => {
  let component: UpdateAmbulancierComponent;
  let fixture: ComponentFixture<UpdateAmbulancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAmbulancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAmbulancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
