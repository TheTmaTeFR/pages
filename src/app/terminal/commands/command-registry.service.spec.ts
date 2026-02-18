import { TestBed } from '@angular/core/testing';

import { CommandRegistryService } from './command-registry.service';

describe('CommandRegistryService', () => {
  let service: CommandRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
