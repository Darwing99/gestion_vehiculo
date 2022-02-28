import { TestBed } from '@angular/core/testing';

import { ListTipoService } from './list-tipo.service';

describe('ListTipoService', () => {
  let service: ListTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
