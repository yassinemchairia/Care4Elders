import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLtifiComponent } from './chat-ltifi.component';

describe('ChatLtifiComponent', () => {
  let component: ChatLtifiComponent;
  let fixture: ComponentFixture<ChatLtifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatLtifiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatLtifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
