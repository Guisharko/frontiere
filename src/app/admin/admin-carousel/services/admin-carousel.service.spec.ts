import { TestBed } from '@angular/core/testing';

import { AdminCarouselService } from './admin-carousel.service';

describe('AdminCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCarouselService = TestBed.get(AdminCarouselService);
    expect(service).toBeTruthy();
  });
});
