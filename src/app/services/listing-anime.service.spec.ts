import { TestBed } from '@angular/core/testing';

import { ListingAnimeService } from './listing-anime.service';

describe('ListingAnimeService', () => {
  let service: ListingAnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingAnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
