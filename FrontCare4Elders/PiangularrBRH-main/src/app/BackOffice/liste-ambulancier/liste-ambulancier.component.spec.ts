import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAmbulancierComponent } from './liste-ambulancier.component';

describe('ListeAmbulancierComponent', () => {
  let component: ListeAmbulancierComponent;
  let fixture: ComponentFixture<ListeAmbulancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAmbulancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAmbulancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
