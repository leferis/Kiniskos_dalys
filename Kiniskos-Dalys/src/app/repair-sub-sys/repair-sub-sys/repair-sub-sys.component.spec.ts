import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairSubSysComponent } from './repair-sub-sys.component';

describe('RepairSubSysComponent', () => {
  let component: RepairSubSysComponent;
  let fixture: ComponentFixture<RepairSubSysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairSubSysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairSubSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
