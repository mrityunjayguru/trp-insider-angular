import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuletypeComponent } from './fuletype.component';

describe('FuletypeComponent', () => {
  let component: FuletypeComponent;
  let fixture: ComponentFixture<FuletypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuletypeComponent]
    });
    fixture = TestBed.createComponent(FuletypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
