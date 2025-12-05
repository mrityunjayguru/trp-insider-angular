import { Route } from '@angular/router'
import { AccordionComponent } from './accordion/accordion.component'
import { AlertComponent } from './alert/alert.component'
import { BreadcrumbSComponent } from './breadcrumb/breadcrumb.component'
import { CardComponent } from './card/card.component'
import { CarouselComponent } from './carousel/carousel.component'
import { CollapseComponent } from './collapse/collapse.component'
import { DropdownComponent } from './dropdown/dropdown.component'
import { ModalComponent } from './modal/modal.component'
import { OffcanvasComponent } from './offcanvas/offcanvas.component'
import { PaginationComponent } from './pagination/pagination.component'
import { ProgressComponent } from './progress/progress.component'
import { ScrollspyComponent } from './scrollspy/scrollspy.component'
import { AvatarComponent } from './avatar/avatar.component'
import { BadgeComponent } from './badge/badge.component'
import { ButtonComponent } from './button/button.component'
import { ListComponent } from './list/list.component'
import { TabComponent } from './tab/tab.component'
import { PlaceholderComponent } from './placeholder/placeholder.component'
import { PopoverComponent } from './popover/popover.component'
import { SpinnerComponent } from './spinner/spinner.component'
import { ToastComponent } from './toast/toast.component'
import { TooltipComponent } from './tooltip/tooltip.component'

export const UI_ROUTES: Route[] = [
  {
    path: 'accordion',
    component: AccordionComponent,
    data: { title: 'Accordions' },
  },
  {
    path: 'alerts',
    component: AlertComponent,
    data: { title: 'Alerts' },
  },
  {
    path: 'avatar',
    component: AvatarComponent,
    data: { title: 'Avatars' },
  },
  {
    path: 'badge',
    component: BadgeComponent,
    data: { title: 'Badges' },
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbSComponent,
    data: { title: 'Breadcrumb' },
  },
  {
    path: 'buttons',
    component: ButtonComponent,
    data: { title: 'Buttons' },
  },
  {
    path: 'carousel',
    component: CarouselComponent,
    data: { title: 'Carousel' },
  },
  {
    path: 'card',
    component: CardComponent,
    data: { title: 'Card' },
  },
  {
    path: 'collapse',
    component: CollapseComponent,
    data: { title: 'Collapse' },
  },
  {
    path: 'dropdown',
    component: DropdownComponent,
    data: { title: 'Dropdown' },
  },
  {
    path: 'list-group',
    component: ListComponent,
    data: { title: 'List Group' },
  },
  {
    path: 'modal',
    component: ModalComponent,
    data: { title: 'Modal' },
  },
  {
    path: 'tabs',
    component: TabComponent,
    data: { title: 'Tabs' },
  },
  {
    path: 'offcanvas',
    component: OffcanvasComponent,
    data: { title: 'Offcanvas' },
  },
  {
    path: 'pagination',
    component: PaginationComponent,
    data: { title: 'Pagination' },
  },
  {
    path: 'placeholders',
    component: PlaceholderComponent,
    data: { title: 'Placeholder' },
  },
  {
    path: 'popovers',
    component: PopoverComponent,
    data: { title: 'opovers' },
  },
  {
    path: 'progress',
    component: ProgressComponent,
    data: { title: 'Progress' },
  },
  {
    path: 'scrollspy',
    component: ScrollspyComponent,
    data: { title: 'Scrollspy' },
  },
  {
    path: 'spinners',
    component: SpinnerComponent,
    data: { title: 'Spinners' },
  },
  {
    path: 'toasts',
    component: ToastComponent,
    data: { title: 'Toasts' },
  },
  {
    path: 'tooltips',
    component: TooltipComponent,
    data: { title: 'Tooltips' },
  },
]
