/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JikanService } from './jikan.service';

describe('Service: Jikan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JikanService]
    });
  });

  it('should ...', inject([JikanService], (service: JikanService) => {
    expect(service).toBeTruthy();
  }));
});
