import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AficheLesOrdenanceByRDVComponent } from './afiche-les-ordenance-by-rdv.component';

describe('AficheLesOrdenanceByRDVComponent', () => {
  let component: AficheLesOrdenanceByRDVComponent;
  let fixture: ComponentFixture<AficheLesOrdenanceByRDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AficheLesOrdenanceByRDVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AficheLesOrdenanceByRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
