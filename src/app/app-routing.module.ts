import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
import { AdminComponent } from './admin/admin.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AdminGuard } from './guards/admin.guard';
import { DashboardGuard } from './guards/dashboard.guard';
import { HealthInfoComponent } from './health-info/health-info.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    children: [
      { path: '', component: AdminComponent },
      {
        path: ':firstname',
        component: AdminPatientComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'basic',
        component: BasicInfoComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'health',
        component: HealthInfoComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
  {
    path: 'dashboard',
    component: PatientDashboardComponent,
    canActivate: [DashboardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
