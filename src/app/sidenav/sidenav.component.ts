import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  active: boolean;
  constructor(private app: AppService) { }

  ngOnInit() {
    this.app.getActivities();
  }
  toggle() {
    this.active = !this.active;
  }
}
