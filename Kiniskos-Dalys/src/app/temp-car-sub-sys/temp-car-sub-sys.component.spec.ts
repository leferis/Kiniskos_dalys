import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCarSubSysComponent } from './temp-car-sub-sys.component';

describe('TempCarSubSysComponent', () => {
  let component: TempCarSubSysComponent;
  let fixture: ComponentFixture<TempCarSubSysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCarSubSysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCarSubSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
