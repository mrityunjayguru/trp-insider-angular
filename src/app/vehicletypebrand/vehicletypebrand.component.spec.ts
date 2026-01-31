import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicletypebrandComponent } from './vehicletypebrand.component';

describe('VehicletypebrandComponent', () => {
  let component: VehicletypebrandComponent;
  let fixture: ComponentFixture<VehicletypebrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicletypebrandComponent]
    });
    fixture = TestBed.createComponent(VehicletypebrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
