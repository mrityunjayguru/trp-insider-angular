import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantproductsComponent } from './merchantproducts.component';

describe('MerchantproductsComponent', () => {
  let component: MerchantproductsComponent;
  let fixture: ComponentFixture<MerchantproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantproductsComponent]
    });
    fixture = TestBed.createComponent(MerchantproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
