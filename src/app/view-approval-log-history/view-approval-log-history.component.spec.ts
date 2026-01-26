import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApprovalLogHistoryComponent } from './view-approval-log-history.component';

describe('ViewApprovalLogHistoryComponent', () => {
  let component: ViewApprovalLogHistoryComponent;
  let fixture: ComponentFixture<ViewApprovalLogHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewApprovalLogHistoryComponent]
    });
    fixture = TestBed.createComponent(ViewApprovalLogHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
