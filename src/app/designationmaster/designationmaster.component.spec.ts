import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationmasterComponent } from './designationmaster.component';

describe('DesignationmasterComponent', () => {
  let component: DesignationmasterComponent;
  let fixture: ComponentFixture<DesignationmasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignationmasterComponent]
    });
    fixture = TestBed.createComponent(DesignationmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
