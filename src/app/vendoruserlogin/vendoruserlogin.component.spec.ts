import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoruserloginComponent } from './vendoruserlogin.component';

describe('VendoruserloginComponent', () => {
  let component: VendoruserloginComponent;
  let fixture: ComponentFixture<VendoruserloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendoruserloginComponent]
    });
    fixture = TestBed.createComponent(VendoruserloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
