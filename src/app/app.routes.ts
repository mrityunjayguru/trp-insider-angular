import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Company } from './pages/company/company';

export const routes: Routes = [
     { path: '', component: Landing },
     { path: 'register', component: Register },
     { path: 'login', component: Login },
     { path: 'company', component: Company },
];
