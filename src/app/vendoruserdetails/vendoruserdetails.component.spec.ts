import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoruserdetailsComponent } from './vendoruserdetails.component';

describe('VendoruserdetailsComponent', () => {
  let component: VendoruserdetailsComponent;
  let fixture: ComponentFixture<VendoruserdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendoruserdetailsComponent]
    });
    fixture = TestBed.createComponent(VendoruserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
