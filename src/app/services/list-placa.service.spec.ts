import { TestBed } from '@angular/core/testing';

import { ListPlacaService } from './list-placa.service';

describe('ListPlacaService', () => {
  let service: ListPlacaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPlacaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
