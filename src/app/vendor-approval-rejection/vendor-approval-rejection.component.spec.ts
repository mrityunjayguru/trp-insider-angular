import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorApprovalRejectionComponent } from './vendor-approval-rejection.component';

describe('VendorApprovalRejectionComponent', () => {
  let component: VendorApprovalRejectionComponent;
  let fixture: ComponentFixture<VendorApprovalRejectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorApprovalRejectionComponent]
    });
    fixture = TestBed.createComponent(VendorApprovalRejectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
