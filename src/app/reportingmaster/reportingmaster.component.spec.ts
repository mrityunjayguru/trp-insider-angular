import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingmasterComponent } from './reportingmaster.component';

describe('ReportingmasterComponent', () => {
  let component: ReportingmasterComponent;
  let fixture: ComponentFixture<ReportingmasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportingmasterComponent]
    });
    fixture = TestBed.createComponent(ReportingmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
