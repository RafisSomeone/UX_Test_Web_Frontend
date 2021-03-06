import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResultsOfTestComponent } from './view-results-of-test.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('ViewResultsOfTestComponent', () => {
  let component: ViewResultsOfTestComponent;
  let fixture: ComponentFixture<ViewResultsOfTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ ViewResultsOfTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResultsOfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
