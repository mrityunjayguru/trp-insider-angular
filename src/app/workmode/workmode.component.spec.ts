import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkmodeComponent } from './workmode.component';

describe('WorkmodeComponent', () => {
  let component: WorkmodeComponent;
  let fixture: ComponentFixture<WorkmodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkmodeComponent]
    });
    fixture = TestBed.createComponent(WorkmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
