import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderaddproductComponent } from './venderaddproduct.component';

describe('VenderaddproductComponent', () => {
  let component: VenderaddproductComponent;
  let fixture: ComponentFixture<VenderaddproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenderaddproductComponent]
    });
    fixture = TestBed.createComponent(VenderaddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
