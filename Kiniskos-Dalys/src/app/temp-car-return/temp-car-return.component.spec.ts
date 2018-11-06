import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCarReturnComponent } from './temp-car-return.component';

describe('TempCarReturnComponent', () => {
  let component: TempCarReturnComponent;
  let fixture: ComponentFixture<TempCarReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCarReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCarReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
