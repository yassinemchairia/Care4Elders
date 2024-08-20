import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemorgueComponent } from './updatemorgue.component';

describe('UpdatemorgueComponent', () => {
  let component: UpdatemorgueComponent;
  let fixture: ComponentFixture<UpdatemorgueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemorgueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemorgueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
