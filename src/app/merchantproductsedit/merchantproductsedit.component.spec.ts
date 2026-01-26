import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantproductseditComponent } from './merchantproductsedit.component';

describe('MerchantproductseditComponent', () => {
  let component: MerchantproductseditComponent;
  let fixture: ComponentFixture<MerchantproductseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantproductseditComponent]
    });
    fixture = TestBed.createComponent(MerchantproductseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
