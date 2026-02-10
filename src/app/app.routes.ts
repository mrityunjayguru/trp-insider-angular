import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { CompanyLayout } from './layout/company-layout/company-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { KnowYourBusiness } from './pages/know-your-business/know-your-business';
import { BusinessSetting } from './pages/business-setting/business-setting';
import { TransportGps } from './pages/transport-gps/transport-gps';
import { EmployeeDetails } from './pages/employee-details/employee-details';
import { Route } from './pages/route/route';
import { Settings } from './pages/settings/settings';
import { ManageEmployee } from './pages/manage-employee/manage-employee';


export const routes: Routes = [
     { path: '', component: Landing },
     { path: 'register', component: Register },
     { path: 'login', component: Login },
     {
    path: 'company',
    component: CompanyLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'kyb', component: KnowYourBusiness },
      { path: 'business-setting', component: BusinessSetting },
      { path: 'transport-gps', component: TransportGps },
      { path: 'employee-details', component: EmployeeDetails },
      { path: 'manage-employee', component: ManageEmployee },
      { path: 'routes', component: Route },
      { path: 'settings', component: Settings }
    ]
  }
];
