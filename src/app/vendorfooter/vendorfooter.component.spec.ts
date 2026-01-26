import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorfooterComponent } from './vendorfooter.component';

describe('VendorfooterComponent', () => {
  let component: VendorfooterComponent;
  let fixture: ComponentFixture<VendorfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorfooterComponent]
    });
    fixture = TestBed.createComponent(VendorfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
