import { TestBed } from '@angular/core/testing';

import { AjouteraffAmbulanceService } from './ajouteraff-ambulance.service';

describe('AjouteraffAmbulanceService', () => {
  let service: AjouteraffAmbulanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouteraffAmbulanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
