import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMerchantAddProductComponent } from './vendor-merchant-add-product.component';

describe('VendorMerchantAddProductComponent', () => {
  let component: VendorMerchantAddProductComponent;
  let fixture: ComponentFixture<VendorMerchantAddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorMerchantAddProductComponent]
    });
    fixture = TestBed.createComponent(VendorMerchantAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
