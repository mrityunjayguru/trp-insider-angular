import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApprovalRejectionComponent } from './admin-approval-rejection.component';

describe('AdminApprovalRejectionComponent', () => {
  let component: AdminApprovalRejectionComponent;
  let fixture: ComponentFixture<AdminApprovalRejectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminApprovalRejectionComponent]
    });
    fixture = TestBed.createComponent(AdminApprovalRejectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
