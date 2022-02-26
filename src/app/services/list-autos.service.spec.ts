import { TestBed } from '@angular/core/testing';

import { ListAutosService } from './list-autos.service';

describe('ListAutosService', () => {
  let service: ListAutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
