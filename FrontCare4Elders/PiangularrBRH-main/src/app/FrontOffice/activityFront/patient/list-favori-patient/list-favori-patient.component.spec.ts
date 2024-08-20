import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavoriPatientComponent } from './list-favori-patient.component';

describe('ListFavoriPatientComponent', () => {
  let component: ListFavoriPatientComponent;
  let fixture: ComponentFixture<ListFavoriPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFavoriPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFavoriPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
