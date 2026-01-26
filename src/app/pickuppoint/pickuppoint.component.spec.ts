import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickuppointComponent } from './pickuppoint.component';

describe('PickuppointComponent', () => {
  let component: PickuppointComponent;
  let fixture: ComponentFixture<PickuppointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickuppointComponent]
    });
    fixture = TestBed.createComponent(PickuppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
