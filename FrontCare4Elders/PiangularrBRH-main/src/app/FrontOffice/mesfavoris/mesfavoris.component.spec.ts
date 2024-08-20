import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesfavorisComponent } from './mesfavoris.component';

describe('MesfavorisComponent', () => {
  let component: MesfavorisComponent;
  let fixture: ComponentFixture<MesfavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesfavorisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesfavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
