import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowyourbusinesslisting } from './knowyourbusinesslisting';

describe('Knowyourbusinesslisting', () => {
  let component: Knowyourbusinesslisting;
  let fixture: ComponentFixture<Knowyourbusinesslisting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Knowyourbusinesslisting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Knowyourbusinesslisting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
