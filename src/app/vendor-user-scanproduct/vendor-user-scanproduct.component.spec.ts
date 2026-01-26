import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorUserScanproductComponent } from './vendor-user-scanproduct.component';

describe('VendorUserScanproductComponent', () => {
  let component: VendorUserScanproductComponent;
  let fixture: ComponentFixture<VendorUserScanproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorUserScanproductComponent]
    });
    fixture = TestBed.createComponent(VendorUserScanproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
