import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarksidebarComponent } from './darksidebar.component';

describe('DarksidebarComponent', () => {
  let component: DarksidebarComponent;
  let fixture: ComponentFixture<DarksidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarksidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarksidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
