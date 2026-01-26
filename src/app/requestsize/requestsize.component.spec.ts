import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsizeComponent } from './requestsize.component';

describe('RequestsizeComponent', () => {
  let component: RequestsizeComponent;
  let fixture: ComponentFixture<RequestsizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestsizeComponent]
    });
    fixture = TestBed.createComponent(RequestsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
