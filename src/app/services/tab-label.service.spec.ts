import { TestBed } from '@angular/core/testing';

import { TabLabelService } from './tab-label.service';

describe('TabLabelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabLabelService = TestBed.get(TabLabelService);
    expect(service).toBeTruthy();
  });
});
