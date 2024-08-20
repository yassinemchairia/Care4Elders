import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontQrPatienMorgueComponent } from './front-qr-patien-morgue.component';

describe('FrontQrPatienMorgueComponent', () => {
  let component: FrontQrPatienMorgueComponent;
  let fixture: ComponentFixture<FrontQrPatienMorgueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontQrPatienMorgueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontQrPatienMorgueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
