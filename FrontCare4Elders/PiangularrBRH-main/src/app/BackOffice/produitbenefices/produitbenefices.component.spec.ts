import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitbeneficesComponent } from './produitbenefices.component';

describe('ProduitbeneficesComponent', () => {
  let component: ProduitbeneficesComponent;
  let fixture: ComponentFixture<ProduitbeneficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitbeneficesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitbeneficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
