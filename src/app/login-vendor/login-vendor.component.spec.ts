import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVendorComponent } from './login-vendor.component';

describe('LoginVendorComponent', () => {
  let component: LoginVendorComponent;
  let fixture: ComponentFixture<LoginVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginVendorComponent]
    });
    fixture = TestBed.createComponent(LoginVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
