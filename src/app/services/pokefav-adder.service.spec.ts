import { TestBed } from '@angular/core/testing';

import { PokefavAdderService } from './pokefav-adder.service';

describe('PokefavAdderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokefavAdderService = TestBed.get(PokefavAdderService);
    expect(service).toBeTruthy();
  });
});
