import { TestBed, inject } from '@angular/core/testing';

import { MetaTagsService } from './meta-tags.service';

describe('MetaTagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaTagsService]
    });
  });

  it('should be created', inject([MetaTagsService], (service: MetaTagsService) => {
    expect(service).toBeTruthy();
  }));
});
