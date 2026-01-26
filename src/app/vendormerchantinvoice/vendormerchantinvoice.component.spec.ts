import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormerchantinvoiceComponent } from './vendormerchantinvoice.component';

describe('VendormerchantinvoiceComponent', () => {
  let component: VendormerchantinvoiceComponent;
  let fixture: ComponentFixture<VendormerchantinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendormerchantinvoiceComponent]
    });
    fixture = TestBed.createComponent(VendormerchantinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
