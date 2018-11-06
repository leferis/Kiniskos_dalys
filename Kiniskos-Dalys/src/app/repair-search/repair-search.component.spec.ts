import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairSearchComponent } from './repair-search.component';

describe('RepairSearchComponent', () => {
  let component: RepairSearchComponent;
  let fixture: ComponentFixture<RepairSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
