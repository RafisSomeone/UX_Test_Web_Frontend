import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoTestComponent } from './do-test.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('DoTestComponent', () => {
  let component: DoTestComponent;
  let fixture: ComponentFixture<DoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ DoTestComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
