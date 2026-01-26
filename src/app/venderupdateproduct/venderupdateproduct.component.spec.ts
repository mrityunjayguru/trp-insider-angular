import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderupdateproductComponent } from './venderupdateproduct.component';

describe('VenderupdateproductComponent', () => {
  let component: VenderupdateproductComponent;
  let fixture: ComponentFixture<VenderupdateproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenderupdateproductComponent]
    });
    fixture = TestBed.createComponent(VenderupdateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
