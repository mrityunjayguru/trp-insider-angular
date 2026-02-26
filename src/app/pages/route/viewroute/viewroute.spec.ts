import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewroute } from './viewroute';

describe('Viewroute', () => {
  let component: Viewroute;
  let fixture: ComponentFixture<Viewroute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewroute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewroute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
