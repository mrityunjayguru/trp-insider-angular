import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftervenderloginComponent } from './aftervenderlogin.component';

describe('AftervenderloginComponent', () => {
  let component: AftervenderloginComponent;
  let fixture: ComponentFixture<AftervenderloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AftervenderloginComponent]
    });
    fixture = TestBed.createComponent(AftervenderloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
