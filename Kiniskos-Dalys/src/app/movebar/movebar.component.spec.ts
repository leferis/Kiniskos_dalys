import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovebarComponent } from './movebar.component';

describe('MovebarComponent', () => {
  let component: MovebarComponent;
  let fixture: ComponentFixture<MovebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
