import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymenttypemasterComponent } from './employmenttypemaster.component';

describe('EmploymenttypemasterComponent', () => {
  let component: EmploymenttypemasterComponent;
  let fixture: ComponentFixture<EmploymenttypemasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploymenttypemasterComponent]
    });
    fixture = TestBed.createComponent(EmploymenttypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
