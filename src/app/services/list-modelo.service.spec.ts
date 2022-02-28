import { TestBed } from '@angular/core/testing';

import { ListModeloService } from './list-modelo.service';

describe('ListModeloService', () => {
  let service: ListModeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListModeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
