import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantfooterComponent } from './merchantfooter.component';

describe('MerchantfooterComponent', () => {
  let component: MerchantfooterComponent;
  let fixture: ComponentFixture<MerchantfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantfooterComponent]
    });
    fixture = TestBed.createComponent(MerchantfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
