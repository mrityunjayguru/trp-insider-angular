import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvendorComponent } from './allvendor.component';

describe('AllvendorComponent', () => {
  let component: AllvendorComponent;
  let fixture: ComponentFixture<AllvendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllvendorComponent]
    });
    fixture = TestBed.createComponent(AllvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
