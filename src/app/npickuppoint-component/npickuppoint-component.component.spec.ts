import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPickuppointComponentComponent } from './npickuppoint-component.component';

describe('NPickuppointComponentComponent', () => {
  let component: NPickuppointComponentComponent;
  let fixture: ComponentFixture<NPickuppointComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NPickuppointComponentComponent]
    });
    fixture = TestBed.createComponent(NPickuppointComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
