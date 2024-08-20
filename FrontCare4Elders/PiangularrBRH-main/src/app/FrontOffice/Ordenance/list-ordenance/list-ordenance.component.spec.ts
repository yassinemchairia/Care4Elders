import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdenanceComponent } from './list-ordenance.component';

describe('ListOrdenanceComponent', () => {
  let component: ListOrdenanceComponent;
  let fixture: ComponentFixture<ListOrdenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrdenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrdenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
