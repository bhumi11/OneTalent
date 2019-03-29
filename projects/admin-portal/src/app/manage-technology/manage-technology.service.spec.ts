import { TestBed } from '@angular/core/testing';

import { ManageTechnologyService } from './manage-technology.service';

describe('ManageTechnologyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageTechnologyService = TestBed.get(ManageTechnologyService);
    expect(service).toBeTruthy();
  });
});
