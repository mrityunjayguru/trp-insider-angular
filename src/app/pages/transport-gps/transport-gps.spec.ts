import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportGps } from './transport-gps';

describe('TransportGps', () => {
  let component: TransportGps;
  let fixture: ComponentFixture<TransportGps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportGps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportGps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
