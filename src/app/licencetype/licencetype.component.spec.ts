import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencetypeComponent } from './licencetype.component';

describe('LicencetypeComponent', () => {
  let component: LicencetypeComponent;
  let fixture: ComponentFixture<LicencetypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicencetypeComponent]
    });
    fixture = TestBed.createComponent(LicencetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
