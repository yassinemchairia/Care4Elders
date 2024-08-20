import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvennementGraphiqueComponent } from './evennement-graphique.component';

describe('EvennementGraphiqueComponent', () => {
  let component: EvennementGraphiqueComponent;
  let fixture: ComponentFixture<EvennementGraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvennementGraphiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvennementGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
