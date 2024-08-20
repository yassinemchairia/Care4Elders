import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3MedicamentComponent } from './top3-medicament.component';

describe('Top3MedicamentComponent', () => {
  let component: Top3MedicamentComponent;
  let fixture: ComponentFixture<Top3MedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top3MedicamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top3MedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
