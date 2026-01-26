import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantviewordersComponent } from './merchantvieworders.component';

describe('MerchantviewordersComponent', () => {
  let component: MerchantviewordersComponent;
  let fixture: ComponentFixture<MerchantviewordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantviewordersComponent]
    });
    fixture = TestBed.createComponent(MerchantviewordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
