export type MenuItem = {
  key?: string
  label?: string
  icon?: string
  link?: string
  collapsed?: boolean
  subMenu?: any
  isTitle?: boolean
  badge?: any
  parentKey?: string
  disabled?: boolean
}

export const MENU: MenuItem[] = [
  {
    key: 'Menu',
    label: 'MENU...',
    isTitle: true,
  },
  {
    key: 'dashboards',
    icon: 'solar:widget-2-outline',
    label: 'Dashboard',
    link: '/index',
    badge: 'New',
  },
  {
    key: 'authentication',
    label: 'Authentication',
    isTitle: false,
    icon: 'solar:user-circle-outline',
    collapsed: true,
    subMenu: [
      {
        key: 'sign-in',
        label: 'Sign In',
        link: '/auth/signin',
        parentKey: 'authentication',
      },
      {
        key: 'signup',
        label: 'Sign Up',
        link: '/auth/signup',
        parentKey: 'authentication',
      },
      {
        key: 'reset-pass',
        label: 'Reset Password',
        link: '/auth/password',
        parentKey: 'authentication',
      },
      {
        key: 'lock-screen',
        label: 'Lock Screen',
        link: '/auth/lock-screen',
        parentKey: 'authentication',
      },
    ],
  },
  {
    key: 'error-pages',
    label: 'Error Pages',
    isTitle: false,
    icon: 'solar:danger-outline',
    collapsed: true,
    subMenu: [
      {
        key: 'pages-404',
        label: 'Pages 404',
        link: '/pages/404',
        parentKey: 'error-pages',
      },
      {
        key: 'pages-404-alt',
        label: 'Pages 404 Alt',
        link: '/pages/404-alt',
        parentKey: 'error-pages',
      },
    ],
  },
  {
    key: 'ui',
    label: 'UI Kit...',
    isTitle: true,
  },
  {
    key: 'base-ui',
    icon: 'solar:leaf-outline',
    label: 'Base UI',
    collapsed: true,
    subMenu: [
      {
        key: 'base-ui-accordion',
        label: 'Accordion',
        link: '/ui/accordion',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-alerts',
        label: 'Alerts',
        link: '/ui/alerts',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-avatar',
        label: 'Avatar',
        link: '/ui/avatar',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-badge',
        label: 'Badge',
        link: '/ui/badge',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-breadcrumb',
        label: 'Breadcrumb',
        link: '/ui/breadcrumb',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-buttons',
        label: 'Buttons',
        link: '/ui/buttons',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-card',
        label: 'Card',
        link: '/ui/card',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-carousel',
        label: 'Carousel',
        link: '/ui/carousel',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-collapse',
        label: 'Collapse',
        link: '/ui/collapse',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-dropdown',
        label: 'Dropdown',
        link: '/ui/dropdown',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-list-group',
        label: 'List Group',
        link: '/ui/list-group',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-modal',
        label: 'Modal',
        link: '/ui/modal',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-tabs',
        label: 'Tabs',
        link: '/ui/tabs',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-offcanvas',
        label: 'Offcanvas',
        link: '/ui/offcanvas',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-pagination',
        label: 'Pagination',
        link: '/ui/pagination',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-placeholders',
        label: 'Placeholders',
        link: '/ui/placeholders',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-popovers',
        label: 'Popovers',
        link: '/ui/popovers',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-progress',
        label: 'Progress',
        link: '/ui/progress',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-scrollspy',
        label: 'Scrollspy',
        link: '/ui/scrollspy',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-spinners',
        label: 'Spinners',
        link: '/ui/spinners',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-toasts',
        label: 'Toasts',
        link: '/ui/toasts',
        parentKey: 'base-ui',
      },
      {
        key: 'base-ui-tooltips',
        label: 'Tooltips',
        link: '/ui/tooltips',
        parentKey: 'base-ui',
      },
    ],
  },
  {
    key: 'charts',
    icon: 'solar:chart-square-outline',
    label: 'Apex Charts',
    link: '/charts',
  },
  {
    key: 'forms',
    icon: 'solar:box-outline',
    label: 'Forms',
    collapsed: true,
    subMenu: [
      {
        key: 'forms-employee-elements',
        label: 'Add Employee',
        link: '/forms/employee',
        parentKey: 'forms',
      },
      {
        key: 'forms-company-elements',
        label: 'Add Company',
        link: '/forms/company',
        parentKey: 'forms',
      },
      {
        key: 'forms-basic-elements',
        label: 'Basic Elements',
        link: '/forms/basic',
        parentKey: 'forms',
      },
      {
        key: 'forms-flat-picker',
        label: 'Flatpicker',
        link: '/forms/flatepicker',
        parentKey: 'forms',
      },
      {
        key: 'forms-validation',
        label: 'Validation',
        link: '/forms/validation',
        parentKey: 'forms',
      },
      {
        key: 'forms-file-uploads',
        label: 'File Upload',
        link: '/forms/fileuploads',
        parentKey: 'forms',
      },
      {
        key: 'forms-editors',
        label: 'Editors',
        link: '/forms/editors',
        parentKey: 'forms',
      },
    ],
  },
  {
    key: 'tables',
    icon: 'solar:checklist-outline',
    label: 'Tables',
    collapsed: true,
    subMenu: [
      {
        key: 'tables-basic',
        label: 'Basic Tables',
        link: '/tables/basic',
        parentKey: 'tables',
      },
      {
        key: 'tables-datatable',
        label: 'Datatables',
        link: '/tables/datatable',
        parentKey: 'tables',
      },
    ],
  },
  {
    key: 'icons',
    icon: 'solar:crown-star-outline',
    label: 'Icons',
    collapsed: true,
    subMenu: [
      {
        key: 'icons-boxicons',
        label: 'Boxicons',
        link: '/icons/boxicons',
        parentKey: 'icons',
      },
      {
        key: 'icons-solar',
        label: 'Solar Icons',
        link: '/icons/solar',
        parentKey: 'icons',
      },
    ],
  },
  {
    key: 'maps',
    icon: 'solar:map-outline',
    label: 'Maps',
    collapsed: true,
    subMenu: [
      {
        key: 'maps-google',
        label: 'Google Maps',
        link: '/maps/google',
        parentKey: 'maps',
      },
      {
        key: 'maps-vector',
        label: 'Vector Maps',
        link: '/maps/vector',
        parentKey: 'maps',
      },
    ],
  },
  {
    key: 'other',
    label: 'OTHER',
    isTitle: true,
  },
  {
    key: 'layouts',
    label: 'Layouts',
    icon: 'solar:window-frame-outline',
    collapsed:true,
    subMenu: [
      {
        key: 'dark-sidenav',
        label: 'Dark Sidenav',
        link: '/dark-sidenav',
        parentKey: 'layouts',
      },
      {
        key: 'dark-topnav',
        label: 'Dark Topnav',
        link: '/dark-topnav',
        parentKey: 'layouts',
      },
      {
        key: 'small-sidenav',
        label: 'Small Sidenav',
        link: '/small-sidenav',
        parentKey: 'layouts',
      },
      {
        key: 'hidden-sidenav',
        label: 'Hidden Sidenav',
        link: '/hidden-sidenav',
        parentKey: 'layouts',
      },
      {
        key: 'dark-mode',
        label: 'Dark Mode',
        link: '/dark-mode',
        parentKey: 'layouts',
        badge: 'Hot'
      },
    ],
  },
  {
    key: 'menuitem',
    icon: 'solar:share-circle-outline',
    label: 'Menu Item',
    collapsed: true,
    subMenu: [
      {
        key: 'menu-item-1',
        label: 'Menu Item 1',
        parentKey: 'menuitem',
      },
      {
        key: 'menu-item-2',
        label: 'Menu Item 2',
        collapsed: true,
        parentKey: 'menuitem',
        subMenu: [
          {
            key: 'menu-sub-item',
            label: 'Menu Sub Item',
            parentKey: 'menu-item-2',
          },
        ],
      },
    ],
  },
  {
    key: 'disabled-item',
    icon: 'solar:user-block-rounded-outline',
    label: 'Disable Item',
    disabled: true,
  },
]
