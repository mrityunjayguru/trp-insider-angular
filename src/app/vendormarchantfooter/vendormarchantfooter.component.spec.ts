import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormarchantfooterComponent } from './vendormarchantfooter.component';

describe('VendormarchantfooterComponent', () => {
  let component: VendormarchantfooterComponent;
  let fixture: ComponentFixture<VendormarchantfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendormarchantfooterComponent]
    });
    fixture = TestBed.createComponent(VendormarchantfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
