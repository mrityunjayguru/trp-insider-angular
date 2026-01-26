import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantuserdetailsComponent } from './merchantuserdetails.component';

describe('MerchantuserdetailsComponent', () => {
  let component: MerchantuserdetailsComponent;
  let fixture: ComponentFixture<MerchantuserdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantuserdetailsComponent]
    });
    fixture = TestBed.createComponent(MerchantuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
