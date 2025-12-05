import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BoxIconsComponent } from './box-icons.component'

describe('BoxIconsComponent', () => {
  let component: BoxIconsComponent
  let fixture: ComponentFixture<BoxIconsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxIconsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(BoxIconsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
