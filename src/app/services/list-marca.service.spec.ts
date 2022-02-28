import { TestBed } from '@angular/core/testing';

import { ListMarcaService } from './list-marca.service';

describe('ListMarcaService', () => {
  let service: ListMarcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMarcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
