import { TestBed, inject } from '@angular/core/testing';

import { GranimService } from './granim.service';

describe('GranimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GranimService]
    });
  });

  it('should be created', inject([GranimService], (service: GranimService) => {
    expect(service).toBeTruthy();
  }));
});
