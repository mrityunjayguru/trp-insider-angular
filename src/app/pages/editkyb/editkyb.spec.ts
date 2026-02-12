import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editkyb } from './editkyb';

describe('Editkyb', () => {
  let component: Editkyb;
  let fixture: ComponentFixture<Editkyb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editkyb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editkyb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
