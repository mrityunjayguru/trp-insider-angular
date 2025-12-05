import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenSidebarComponent } from './hidden-sidebar.component';

describe('HiddenSidebarComponent', () => {
  let component: HiddenSidebarComponent;
  let fixture: ComponentFixture<HiddenSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
