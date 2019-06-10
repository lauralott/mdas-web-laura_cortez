import { TestBed } from '@angular/core/testing';

import { PokefinderService } from './pokefinder.service';

describe('PokefinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokefinderService = TestBed.get(PokefinderService);
    expect(service).toBeTruthy();
  });
});
