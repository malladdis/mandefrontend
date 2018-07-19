import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ADMIN_ROUTES} from './admin-routes';
import {SidenavComponent} from '../sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ADMIN_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule],
  bootstrap: [SidenavComponent]
})
export class AdminModule { }
