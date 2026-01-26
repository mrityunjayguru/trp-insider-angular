import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantApprovalRejectionComponent } from './merchant-approval-rejection.component';

describe('MerchantApprovalRejectionComponent', () => {
  let component: MerchantApprovalRejectionComponent;
  let fixture: ComponentFixture<MerchantApprovalRejectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantApprovalRejectionComponent]
    });
    fixture = TestBed.createComponent(MerchantApprovalRejectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
