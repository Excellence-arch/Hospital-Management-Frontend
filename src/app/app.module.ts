import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { HealthInfoComponent } from './health-info/health-info.component';
import { UserHealthComponent } from './user-health/user-health.component';
import { UserBasicComponent } from './user-basic/user-basic.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminPatientComponent,
    PatientDashboardComponent,
    BasicInfoComponent,
    HealthInfoComponent,
    UserHealthComponent,
    UserBasicComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
