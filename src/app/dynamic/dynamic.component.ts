import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicDirective} from '../dynamic.directive';
import {AuthService} from '../auth.service';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {HomeComponent} from '../home/home.component';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @ViewChild(DynamicDirective) dynamic: DynamicDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appservice: AuthService) { }

  ngOnInit() {
    this.loadComponent();
  }
  loadComponent() {
    this.appservice.authStatus.subscribe(data => {
      if (data) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SidenavComponent);

        const viewContainerRef = this.dynamic.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
      } else {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);

        const viewContainerRef = this.dynamic.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
      }
    }, err => {
      console.log(err);
    });
  }
}
