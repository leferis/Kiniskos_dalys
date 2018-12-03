import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UzsakymaiComponent } from './uzsakymai.component';

describe('UzsakymaiComponent', () => {
  let component: UzsakymaiComponent;
  let fixture: ComponentFixture<UzsakymaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UzsakymaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UzsakymaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
