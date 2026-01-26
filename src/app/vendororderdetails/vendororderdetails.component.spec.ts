import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendororderdetailsComponent } from './vendororderdetails.component';

describe('VendororderdetailsComponent', () => {
  let component: VendororderdetailsComponent;
  let fixture: ComponentFixture<VendororderdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendororderdetailsComponent]
    });
    fixture = TestBed.createComponent(VendororderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
