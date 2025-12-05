import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ErrorAltComponent } from './error-alt.component'

describe('ErrorAltComponent', () => {
  let component: ErrorAltComponent
  let fixture: ComponentFixture<ErrorAltComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorAltComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ErrorAltComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
