import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsForApprovalComponent } from './view-products-for-approval.component';

describe('ViewProductsForApprovalComponent', () => {
  let component: ViewProductsForApprovalComponent;
  let fixture: ComponentFixture<ViewProductsForApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductsForApprovalComponent]
    });
    fixture = TestBed.createComponent(ViewProductsForApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
