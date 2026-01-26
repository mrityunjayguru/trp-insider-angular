import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormerchantapproveComponent } from './vendormerchantapprove.component';

describe('VendormerchantapproveComponent', () => {
  let component: VendormerchantapproveComponent;
  let fixture: ComponentFixture<VendormerchantapproveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendormerchantapproveComponent]
    });
    fixture = TestBed.createComponent(VendormerchantapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
