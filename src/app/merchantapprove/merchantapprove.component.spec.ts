import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantapproveComponent } from './merchantapprove.component';

describe('MerchantapproveComponent', () => {
  let component: MerchantapproveComponent;
  let fixture: ComponentFixture<MerchantapproveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantapproveComponent]
    });
    fixture = TestBed.createComponent(MerchantapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
