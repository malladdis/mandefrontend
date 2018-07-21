import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ActivityComponent} from '../activity/activity.component';
import {ProgramComponent} from '../program/program.component';
import {ProjectComponent} from '../project/project.component';
import {OutcomeComponent} from '../outcome/outcome.component';
import {OutputComponent} from '../output/output.component';
import {InputComponent} from '../input/input.component';
import {BeforeLoginService} from '../before-login.service';
import {AfterLoginService} from '../after-login.service';

export const ADMIN_ROUTES: Routes = [
  {path: '', component: HomeComponent, canActivate: [BeforeLoginService]},
  {path: 'admin/dashboard', component: DashboardComponent, canActivate: [AfterLoginService]},
  {path: 'admin/activities', component: ActivityComponent, canActivate: [AfterLoginService]},
  {path: 'admin/programs', component: ProgramComponent, canActivate: [AfterLoginService]},
  {path: 'admin/projects', component: ProjectComponent, canActivate: [AfterLoginService]},
  {path: 'admin/outcomes', component: OutcomeComponent, canActivate: [AfterLoginService]},
  {path: 'admin/outputs', component: OutputComponent, canActivate: [AfterLoginService]},
  {path: 'admin/inputs', component: InputComponent, canActivate: [AfterLoginService]},
];
