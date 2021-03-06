import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import { CommonTestModule } from '../common-test/common-test.module';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[CommonTestModule]
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
