import { TestBed } from '@angular/core/testing';

import { MorgueService } from './morgue.service';

describe('MorgueService', () => {
  let service: MorgueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MorgueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
