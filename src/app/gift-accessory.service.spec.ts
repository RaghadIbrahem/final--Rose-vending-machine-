import { TestBed } from '@angular/core/testing';

import { GiftAccessoryService } from './gift-accessory.service';

describe('GiftAccessoryService', () => {
  let service: GiftAccessoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiftAccessoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
