import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCarFixDelComponent } from './temp-car-fix-del.component';

describe('TempCarFixDelComponent', () => {
  let component: TempCarFixDelComponent;
  let fixture: ComponentFixture<TempCarFixDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCarFixDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCarFixDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
