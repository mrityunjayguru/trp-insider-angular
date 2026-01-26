import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoruserOrderdetailsComponent } from './vendoruser-orderdetails.component';

describe('VendoruserOrderdetailsComponent', () => {
  let component: VendoruserOrderdetailsComponent;
  let fixture: ComponentFixture<VendoruserOrderdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendoruserOrderdetailsComponent]
    });
    fixture = TestBed.createComponent(VendoruserOrderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
