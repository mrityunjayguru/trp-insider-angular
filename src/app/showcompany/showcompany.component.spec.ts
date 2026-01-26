import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcompanyComponent } from './showcompany.component';

describe('ShowcompanyComponent', () => {
  let component: ShowcompanyComponent;
  let fixture: ComponentFixture<ShowcompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcompanyComponent]
    });
    fixture = TestBed.createComponent(ShowcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
