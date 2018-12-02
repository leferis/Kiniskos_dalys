import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCarOrderComponent } from './temp-car-order.component';

describe('TempCarOrderComponent', () => {
  let component: TempCarOrderComponent;
  let fixture: ComponentFixture<TempCarOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCarOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCarOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
