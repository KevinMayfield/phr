import { TestBed } from '@angular/core/testing';

import { HapiService } from './hapi.service';

describe('HapiService', () => {
  let service: HapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
