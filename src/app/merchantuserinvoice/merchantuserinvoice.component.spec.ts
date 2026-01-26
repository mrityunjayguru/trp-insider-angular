import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantuserinvoiceComponent } from './merchantuserinvoice.component';

describe('MerchantuserinvoiceComponent', () => {
  let component: MerchantuserinvoiceComponent;
  let fixture: ComponentFixture<MerchantuserinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantuserinvoiceComponent]
    });
    fixture = TestBed.createComponent(MerchantuserinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
