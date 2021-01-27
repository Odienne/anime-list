import { TestBed } from '@angular/core/testing';

import { AnimeDetailService } from './anime-detail.service';

describe('AnimeDetailService', () => {
  let service: AnimeDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
