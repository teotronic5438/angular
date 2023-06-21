import { TestBed } from '@angular/core/testing';

import { ConsumosApiService } from './consumos-api.service';

describe('ConsumosApiService', () => {
  let service: ConsumosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
