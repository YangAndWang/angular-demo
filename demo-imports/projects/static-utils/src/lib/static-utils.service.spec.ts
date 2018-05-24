import { TestBed, inject } from '@angular/core/testing';

import { StaticUtilsService } from './static-utils.service';

describe('StaticUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticUtilsService]
    });
  });

  it('should be created', inject([StaticUtilsService], (service: StaticUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
