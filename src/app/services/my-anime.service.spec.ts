/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyAnimeService } from './my-anime.service';

describe('Service: MyAnime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAnimeService]
    });
  });

  it('should ...', inject([MyAnimeService], (service: MyAnimeService) => {
    expect(service).toBeTruthy();
  }));
});
