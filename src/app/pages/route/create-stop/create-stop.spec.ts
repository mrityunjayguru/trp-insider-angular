import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStop } from './create-stop';

describe('CreateStop', () => {
  let component: CreateStop;
  let fixture: ComponentFixture<CreateStop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
