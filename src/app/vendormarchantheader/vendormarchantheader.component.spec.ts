import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormarchantheaderComponent } from './vendormarchantheader.component';

describe('VendormarchantheaderComponent', () => {
  let component: VendormarchantheaderComponent;
  let fixture: ComponentFixture<VendormarchantheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendormarchantheaderComponent]
    });
    fixture = TestBed.createComponent(VendormarchantheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
