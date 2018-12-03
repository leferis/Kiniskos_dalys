import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WokerReviewComponent } from './woker-review.component';

describe('WokerReviewComponent', () => {
  let component: WokerReviewComponent;
  let fixture: ComponentFixture<WokerReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WokerReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WokerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
