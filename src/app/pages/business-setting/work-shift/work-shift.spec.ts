import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShift } from './work-shift';

describe('WorkShift', () => {
  let component: WorkShift;
  let fixture: ComponentFixture<WorkShift>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkShift]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkShift);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
