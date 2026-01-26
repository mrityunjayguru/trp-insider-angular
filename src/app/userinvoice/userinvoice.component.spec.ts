import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinvoiceComponent } from './userinvoice.component';

describe('UserinvoiceComponent', () => {
  let component: UserinvoiceComponent;
  let fixture: ComponentFixture<UserinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserinvoiceComponent]
    });
    fixture = TestBed.createComponent(UserinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
