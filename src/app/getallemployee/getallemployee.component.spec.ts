import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallemployeeComponent } from './getallemployee.component';

describe('GetallemployeeComponent', () => {
  let component: GetallemployeeComponent;
  let fixture: ComponentFixture<GetallemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallemployeeComponent]
    });
    fixture = TestBed.createComponent(GetallemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
