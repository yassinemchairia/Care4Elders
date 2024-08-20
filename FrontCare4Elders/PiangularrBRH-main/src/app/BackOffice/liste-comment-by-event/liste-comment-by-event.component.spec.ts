import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommentByEventComponent } from './liste-comment-by-event.component';

describe('ListeCommentByEventComponent', () => {
  let component: ListeCommentByEventComponent;
  let fixture: ComponentFixture<ListeCommentByEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCommentByEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCommentByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
