import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantaddproductComponent } from './merchantaddproduct.component';

describe('MerchantaddproductComponent', () => {
  let component: MerchantaddproductComponent;
  let fixture: ComponentFixture<MerchantaddproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantaddproductComponent]
    });
    fixture = TestBed.createComponent(MerchantaddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
