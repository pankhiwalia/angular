import { TestBed, inject } from '@angular/core/testing';

import { UserregisterService } from './userregister.service';

describe('UserregisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserregisterService]
    });
  });

  it('should be created', inject([UserregisterService], (service: UserregisterService) => {
    expect(service).toBeTruthy();
  }));
});
