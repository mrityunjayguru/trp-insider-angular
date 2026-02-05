import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourBusiness } from './know-your-business';

describe('KnowYourBusiness', () => {
  let component: KnowYourBusiness;
  let fixture: ComponentFixture<KnowYourBusiness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowYourBusiness]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowYourBusiness);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
