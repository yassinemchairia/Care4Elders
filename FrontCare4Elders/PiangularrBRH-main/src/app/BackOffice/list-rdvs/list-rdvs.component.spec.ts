import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRdvsComponent } from './list-rdvs.component';

describe('ListRdvsComponent', () => {
  let component: ListRdvsComponent;
  let fixture: ComponentFixture<ListRdvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRdvsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRdvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
