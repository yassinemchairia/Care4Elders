import { TestBed } from '@angular/core/testing';

import { GestionpanierService } from './gestionpanier.service';

describe('GestionpanierService', () => {
  let service: GestionpanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionpanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
