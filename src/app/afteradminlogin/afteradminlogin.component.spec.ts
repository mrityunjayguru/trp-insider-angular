import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfteradminloginComponent } from './afteradminlogin.component';

describe('AfteradminloginComponent', () => {
  let component: AfteradminloginComponent;
  let fixture: ComponentFixture<AfteradminloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfteradminloginComponent]
    });
    fixture = TestBed.createComponent(AfteradminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
