import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRdvMedecinComponent } from './list-rdv-medecin.component';

describe('ListRdvMedecinComponent', () => {
  let component: ListRdvMedecinComponent;
  let fixture: ComponentFixture<ListRdvMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRdvMedecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRdvMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
