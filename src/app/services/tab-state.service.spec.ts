import { TestBed } from '@angular/core/testing';

import { TabStateService } from './tab-state.service';

describe('TabStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabStateService = TestBed.get(TabStateService);
    expect(service).toBeTruthy();
  });
});
