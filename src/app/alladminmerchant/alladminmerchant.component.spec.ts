import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlladminmerchantComponent } from './alladminmerchant.component';

describe('AlladminmerchantComponent', () => {
  let component: AlladminmerchantComponent;
  let fixture: ComponentFixture<AlladminmerchantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlladminmerchantComponent]
    });
    fixture = TestBed.createComponent(AlladminmerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
