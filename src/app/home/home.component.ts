import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form = {
    username: null,
    password: null
  };
  public error;
  constructor(private auth: AuthService, private token: TokenService, private router: Router) { }

  ngOnInit() {
  }
  login(form) {
    this.auth.login(form.value.username, form.value.password).subscribe(data => {
        this.handleResponse(data);
    }, error => {
          this.handleError(error);
      });
  }
  handleError(error) {
    this.error = error.error.error;
    console.log(error);
  }
  handleResponse(data) {
    this.token.handle(data.token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/admin/dashboard');
  }
}
