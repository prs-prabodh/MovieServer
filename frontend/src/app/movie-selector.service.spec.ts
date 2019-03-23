import { TestBed } from '@angular/core/testing';

import { MovieSelectorService } from './movie-selector.service';

describe('MovieSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieSelectorService = TestBed.get(MovieSelectorService);
    expect(service).toBeTruthy();
  });
});
