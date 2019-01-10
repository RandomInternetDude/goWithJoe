import { TestBed, inject } from '@angular/core/testing';

import { ActivityService } from './activity-list.service';

describe('AcitivityListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityService]
    });
  });

  it('should be created', inject([ActivityService], (service: ActivityService) => {
    expect(service).toBeTruthy();
  }));
});
