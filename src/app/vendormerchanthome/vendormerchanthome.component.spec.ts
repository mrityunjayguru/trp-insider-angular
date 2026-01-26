import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormerchanthomeComponent } from './vendormerchanthome.component';

describe('VendormerchanthomeComponent', () => {
  let component: VendormerchanthomeComponent;
  let fixture: ComponentFixture<VendormerchanthomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendormerchanthomeComponent]
    });
    fixture = TestBed.createComponent(VendormerchanthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
