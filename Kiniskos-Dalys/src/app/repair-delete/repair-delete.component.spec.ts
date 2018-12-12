import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairDeleteComponent } from './repair-delete.component';

describe('RepairDeleteComponent', () => {
  let component: RepairDeleteComponent;
  let fixture: ComponentFixture<RepairDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
