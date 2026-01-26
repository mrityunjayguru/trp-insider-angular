import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoruserregisterComponent } from './vendoruserregister.component';

describe('VendoruserregisterComponent', () => {
  let component: VendoruserregisterComponent;
  let fixture: ComponentFixture<VendoruserregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendoruserregisterComponent]
    });
    fixture = TestBed.createComponent(VendoruserregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
