import { TestBed, inject } from '@angular/core/testing';

import { MobPartsService } from './mob-parts.service';

describe('MobPartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobPartsService]
    });
  });

  it('should be created', inject([MobPartsService], (service: MobPartsService) => {
    expect(service).toBeTruthy();
  }));
});
