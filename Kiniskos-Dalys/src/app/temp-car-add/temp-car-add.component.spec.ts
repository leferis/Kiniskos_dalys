import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCarAddComponent } from './temp-car-add.component';

describe('TempCarAddComponent', () => {
  let component: TempCarAddComponent;
  let fixture: ComponentFixture<TempCarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
