import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproductComponentComponent } from './updateproduct.component.component';

describe('UpdateproductComponentComponent', () => {
  let component: UpdateproductComponentComponent;
  let fixture: ComponentFixture<UpdateproductComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateproductComponentComponent]
    });
    fixture = TestBed.createComponent(UpdateproductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
