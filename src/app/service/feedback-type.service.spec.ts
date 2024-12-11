import { TestBed } from '@angular/core/testing';

import { FeedbackTypeService } from './feedback-type.service';

describe('FeedbackTypeService', () => {
  let service: FeedbackTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
