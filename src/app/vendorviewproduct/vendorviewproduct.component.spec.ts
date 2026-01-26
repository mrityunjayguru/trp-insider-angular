import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorviewproductComponent } from './vendorviewproduct.component';

describe('VendorviewproductComponent', () => {
  let component: VendorviewproductComponent;
  let fixture: ComponentFixture<VendorviewproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorviewproductComponent]
    });
    fixture = TestBed.createComponent(VendorviewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
