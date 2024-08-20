import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrhStastsGenreComponent } from './brh-stasts-genre.component';

describe('BrhStastsGenreComponent', () => {
  let component: BrhStastsGenreComponent;
  let fixture: ComponentFixture<BrhStastsGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrhStastsGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrhStastsGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
