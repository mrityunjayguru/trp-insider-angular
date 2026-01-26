import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsizesComponent } from './adminsizes.component';

describe('AdminsizesComponent', () => {
  let component: AdminsizesComponent;
  let fixture: ComponentFixture<AdminsizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsizesComponent]
    });
    fixture = TestBed.createComponent(AdminsizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
