import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminLogComponent } from './view-admin-log.component';

describe('ViewAdminLogComponent', () => {
  let component: ViewAdminLogComponent;
  let fixture: ComponentFixture<ViewAdminLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAdminLogComponent]
    });
    fixture = TestBed.createComponent(ViewAdminLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
