import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoruserinvoiceComponent } from './vendoruserinvoice.component';

describe('VendoruserinvoiceComponent', () => {
  let component: VendoruserinvoiceComponent;
  let fixture: ComponentFixture<VendoruserinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendoruserinvoiceComponent]
    });
    fixture = TestBed.createComponent(VendoruserinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
