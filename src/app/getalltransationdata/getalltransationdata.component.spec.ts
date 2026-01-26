import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalltransationdataComponent } from './getalltransationdata.component';

describe('GetalltransationdataComponent', () => {
  let component: GetalltransationdataComponent;
  let fixture: ComponentFixture<GetalltransationdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetalltransationdataComponent]
    });
    fixture = TestBed.createComponent(GetalltransationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
