import { TestBed } from '@angular/core/testing';

import { TesteService } from './teste.service';

describe('TesteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesteService = TestBed.get(TesteService);
    expect(service).toBeTruthy();
  });
});
