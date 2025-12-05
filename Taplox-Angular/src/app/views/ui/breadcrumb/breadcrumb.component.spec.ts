import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BreadcrumbSComponent } from './breadcrumb.component'

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbSComponent
  let fixture: ComponentFixture<BreadcrumbSComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbSComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(BreadcrumbSComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
