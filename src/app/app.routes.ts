import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/common/layouts/auth-layout/auth-layout.component';

import { AuthService } from './services/auth/auth.service';
import {AppInboxModule} from './views/app-inbox/app-inbox.module';
import {AppFormsModule} from './views/forms/forms.module';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'reportes',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthService],
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        data: { title: 'dashboard', breadcrumb: 'DASHBOARD'}
      },
      {
        path: 'reportes',
        loadChildren: './views/reportes/reportes.module#ReportesModule',
        data: { title: 'reportes', breadcrumb: 'REPORTES'}
      },
      {
        path: 'forms',
        loadChildren: './views/forms/forms.module#AppFormsModule',
        data: { title: 'forms', breadcrumb: 'forms'}
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

