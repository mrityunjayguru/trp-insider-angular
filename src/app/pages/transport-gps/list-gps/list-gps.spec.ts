import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGps } from './list-gps';

describe('ListGps', () => {
  let component: ListGps;
  let fixture: ComponentFixture<ListGps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
