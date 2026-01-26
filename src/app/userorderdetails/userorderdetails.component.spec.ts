import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserorderdetailsComponent } from './userorderdetails.component';

describe('UserorderdetailsComponent', () => {
  let component: UserorderdetailsComponent;
  let fixture: ComponentFixture<UserorderdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserorderdetailsComponent]
    });
    fixture = TestBed.createComponent(UserorderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
