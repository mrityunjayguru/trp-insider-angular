import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorinvoiceComponent } from './vendorinvoice.component';

describe('VendorinvoiceComponent', () => {
  let component: VendorinvoiceComponent;
  let fixture: ComponentFixture<VendorinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorinvoiceComponent]
    });
    fixture = TestBed.createComponent(VendorinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
