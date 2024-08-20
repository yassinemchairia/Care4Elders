import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeinfermierComponent } from './listeinfermier.component';

describe('ListeinfermierComponent', () => {
  let component: ListeinfermierComponent;
  let fixture: ComponentFixture<ListeinfermierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeinfermierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeinfermierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
