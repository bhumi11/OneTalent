import { TestBed } from '@angular/core/testing';

import { TalentCommonService } from './talent-common.service';

describe('TalentCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TalentCommonService = TestBed.get(TalentCommonService);
    expect(service).toBeTruthy();
  });
});
