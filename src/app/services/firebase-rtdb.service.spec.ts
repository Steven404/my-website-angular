import { TestBed } from '@angular/core/testing';

import { FirebaseRtdbService } from './firebase-rtdb.service';

describe('FirebaseRtdbService', () => {
  let service: FirebaseRtdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseRtdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
