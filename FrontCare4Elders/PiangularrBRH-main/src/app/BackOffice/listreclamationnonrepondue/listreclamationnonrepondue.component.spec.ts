import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreclamationnonrepondueComponent } from './listreclamationnonrepondue.component';

describe('ListreclamationnonrepondueComponent', () => {
  let component: ListreclamationnonrepondueComponent;
  let fixture: ComponentFixture<ListreclamationnonrepondueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreclamationnonrepondueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListreclamationnonrepondueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
