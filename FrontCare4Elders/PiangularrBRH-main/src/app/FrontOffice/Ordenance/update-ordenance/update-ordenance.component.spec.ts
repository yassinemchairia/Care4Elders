import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrdenanceComponent } from './update-ordenance.component';

describe('UpdateOrdenanceComponent', () => {
  let component: UpdateOrdenanceComponent;
  let fixture: ComponentFixture<UpdateOrdenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrdenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOrdenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
