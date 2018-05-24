import { TestBed, inject } from '@angular/core/testing';

import { SssService } from './sss.service';

describe('SssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SssService]
    });
  });

  it('should be created', inject([SssService], (service: SssService) => {
    expect(service).toBeTruthy();
  }));
});
