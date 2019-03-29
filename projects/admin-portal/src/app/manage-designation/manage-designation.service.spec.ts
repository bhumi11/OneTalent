import { TestBed } from '@angular/core/testing';

import { ManageDesignationService } from './manage-designation.service';

describe('ManageDesignationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ManageDesignationService = TestBed.get(ManageDesignationService);
        expect(service).toBeTruthy();
    });
});
