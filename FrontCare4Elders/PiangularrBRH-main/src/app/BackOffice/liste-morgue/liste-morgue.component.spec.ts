import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMorgueComponent } from './liste-morgue.component';

describe('ListeMorgueComponent', () => {
  let component: ListeMorgueComponent;
  let fixture: ComponentFixture<ListeMorgueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMorgueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMorgueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
