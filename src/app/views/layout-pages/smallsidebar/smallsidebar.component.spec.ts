import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallsidebarComponent } from './smallsidebar.component';

describe('SmallsidebarComponent', () => {
  let component: SmallsidebarComponent;
  let fixture: ComponentFixture<SmallsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallsidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
