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
import { Settings } from './pages/settings/settings';
import { ManageEmployee } from './pages/manage-employee/manage-employee';

import { CreateStop } from './pages/route/create-stop/create-stop';
import { ManageRoute } from './pages/route/manage-route/manage-route';
import { CreateRoute } from './pages/route/create-route/create-route';
import { Knowyourbusinesslisting } from './pages/knowyourbusinesslisting/knowyourbusinesslisting';
import { Editkyb } from './pages/editkyb/editkyb';
import {Employeelist} from './pages/employeelist/employeelist';
import {Viewroute} from './pages/route/viewroute/viewroute';
import { CompanyGuard } from './guards/company-guard';


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
      { path: 'kyb', component: KnowYourBusiness, canActivate: [CompanyGuard] },
      {
           path: 'editkyb/:id', component: Editkyb, canActivate: [CompanyGuard]
      },
      { path: 'business-setting', component: BusinessSetting },
      { path: 'transport-gps', component: TransportGps },
      { path: 'employee-details', component: EmployeeDetails },
      { path: 'manage-employee', component: ManageEmployee },
      { path: 'manage-routes', component: ManageRoute },
      { path: 'create-route', component: CreateRoute },
      { path: 'create-stop', component: CreateStop },
      { path: 'settings', component: Settings },
      { path: 'knowyourbusinesslisting', component: Knowyourbusinesslisting },
      { path: 'employeelist/:id', component: Employeelist },
      {path: 'viewroute', component: Viewroute},
    ]
  }
];
