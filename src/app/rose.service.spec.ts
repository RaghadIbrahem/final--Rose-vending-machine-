import { TestBed } from '@angular/core/testing';

import { RoseService } from './rose.service';

describe('RoseService', () => {
  let service: RoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
