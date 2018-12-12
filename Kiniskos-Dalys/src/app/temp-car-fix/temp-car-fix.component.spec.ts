import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCarFixComponent } from './temp-car-fix.component';

describe('TempCarFixComponent', () => {
  let component: TempCarFixComponent;
  let fixture: ComponentFixture<TempCarFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCarFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCarFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
