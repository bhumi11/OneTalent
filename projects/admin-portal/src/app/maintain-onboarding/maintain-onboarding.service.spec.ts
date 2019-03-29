import { TestBed } from '@angular/core/testing';

import { MaintainOnboardingService } from './maintain-onboarding.service';

describe('MaintainOnboardingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaintainOnboardingService = TestBed.get(MaintainOnboardingService);
    expect(service).toBeTruthy();
  });
});
