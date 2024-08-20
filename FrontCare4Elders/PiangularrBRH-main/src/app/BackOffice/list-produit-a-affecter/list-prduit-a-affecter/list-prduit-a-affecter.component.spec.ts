import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrduitAAffecterComponent } from './list-prduit-a-affecter.component';

describe('ListPrduitAAffecterComponent', () => {
  let component: ListPrduitAAffecterComponent;
  let fixture: ComponentFixture<ListPrduitAAffecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrduitAAffecterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrduitAAffecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
