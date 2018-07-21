import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminModule} from './admin/admin.module';
import {RouterModule, Routes} from '@angular/router';
import {AppService} from './app.service';
import {FormsModule} from '@angular/forms';
import {TokenService} from './token.service';
import {DynamicComponent} from './dynamic/dynamic.component';
import {DynamicDirective} from './dynamic.directive';
import { ActivityComponent } from './activity/activity.component';
import { ProgramComponent } from './program/program.component';
import { ProjectComponent } from './project/project.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { OutputComponent } from './output/output.component';
import { InputComponent } from './input/input.component';
import {BeforeLoginService} from './before-login.service';
import {AfterLoginService} from './after-login.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    DashboardComponent,
    DynamicComponent,
    DynamicDirective,
    ActivityComponent,
    ProgramComponent,
    ProjectComponent,
    OutcomeComponent,
    OutputComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    AngularFontAwesomeModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8000/api'],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [AuthService, AppService, TokenService, BeforeLoginService, AfterLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
