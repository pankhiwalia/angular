import { TestBed, inject } from '@angular/core/testing';

import { DressService } from './dress.service';

describe('DressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DressService]
    });
  });

  it('should be created', inject([DressService], (service: DressService) => {
    expect(service).toBeTruthy();
  }));
});
