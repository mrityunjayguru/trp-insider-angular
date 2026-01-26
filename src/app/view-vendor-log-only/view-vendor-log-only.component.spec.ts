import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVendorLogOnlyComponent } from './view-vendor-log-only.component';

describe('ViewVendorLogOnlyComponent', () => {
  let component: ViewVendorLogOnlyComponent;
  let fixture: ComponentFixture<ViewVendorLogOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVendorLogOnlyComponent]
    });
    fixture = TestBed.createComponent(ViewVendorLogOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
