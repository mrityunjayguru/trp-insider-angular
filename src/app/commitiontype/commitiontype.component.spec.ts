import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitiontypeComponent } from './commitiontype.component';

describe('CommitiontypeComponent', () => {
  let component: CommitiontypeComponent;
  let fixture: ComponentFixture<CommitiontypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommitiontypeComponent]
    });
    fixture = TestBed.createComponent(CommitiontypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
