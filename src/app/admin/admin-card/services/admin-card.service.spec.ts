import { TestBed } from '@angular/core/testing';

import { AdminCardService } from './admin-card.service';

describe('AdminCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCardService = TestBed.get(AdminCardService);
    expect(service).toBeTruthy();
  });
});
