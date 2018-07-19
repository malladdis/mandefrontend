import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ActivityComponent} from '../activity/activity.component';
import {ProgramComponent} from '../program/program.component';
import {ProjectComponent} from '../project/project.component';
import {OutcomeComponent} from '../outcome/outcome.component';
import {OutputComponent} from '../output/output.component';
import {InputComponent} from '../input/input.component';

export const ADMIN_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin/dashboard', component: DashboardComponent},
  {path: 'admin/activities', component: ActivityComponent},
  {path: 'admin/programs', component: ProgramComponent},
  {path: 'admin/projects', component: ProjectComponent},
  {path: 'admin/outcomes', component: OutcomeComponent},
  {path: 'admin/outputs', component: OutputComponent},
  {path: 'admin/inputs', component: InputComponent},
];
