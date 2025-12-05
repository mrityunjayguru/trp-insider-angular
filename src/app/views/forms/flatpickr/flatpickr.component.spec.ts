import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FlatpickrComponent } from './flatpickr.component'

describe('FlatpickrComponent', () => {
  let component: FlatpickrComponent
  let fixture: ComponentFixture<FlatpickrComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlatpickrComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FlatpickrComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
