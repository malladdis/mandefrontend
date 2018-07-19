import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TokenService} from './token.service';
import {SidenavComponent} from './sidenav/sidenav.component';
import {HomeComponent} from './home/home.component';
@Injectable()
export class AuthService {
  API_URL = 'http://localhost:8000/api';
  isLogged = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  comp: undefined;
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  constructor(private httpclient: HttpClient, private router: Router, private Token: TokenService) { }

  login(username, password) {
    return this.httpclient
      .post(
        this.API_URL + '/auth/login',
        JSON.stringify({
          email: username,
          password: password,
        }),
        this.httpOptions
      );
  }
  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);

  }
  getContent() {
    return this.authStatus;
  }
}
