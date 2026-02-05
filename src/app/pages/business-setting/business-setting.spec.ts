import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSetting } from './business-setting';

describe('BusinessSetting', () => {
  let component: BusinessSetting;
  let fixture: ComponentFixture<BusinessSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSetting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
