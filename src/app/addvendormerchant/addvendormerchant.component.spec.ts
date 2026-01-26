import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvendormerchantComponent } from './addvendormerchant.component';

describe('AddvendormerchantComponent', () => {
  let component: AddvendormerchantComponent;
  let fixture: ComponentFixture<AddvendormerchantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvendormerchantComponent]
    });
    fixture = TestBed.createComponent(AddvendormerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
