import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarktopbarComponent } from './darktopbar.component';

describe('DarktopbarComponent', () => {
  let component: DarktopbarComponent;
  let fixture: ComponentFixture<DarktopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarktopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarktopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
