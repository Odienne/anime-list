/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LastAnimeService } from './last-anime.service';

describe('Service: LastAnime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastAnimeService]
    });
  });

  it('should ...', inject([LastAnimeService], (service: LastAnimeService) => {
    expect(service).toBeTruthy();
  }));
});
