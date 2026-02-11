import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoute } from './manage-route';

describe('ManageRoute', () => {
  let component: ManageRoute;
  let fixture: ComponentFixture<ManageRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRoute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
