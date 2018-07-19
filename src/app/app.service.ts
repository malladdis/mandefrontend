import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AppService {
  API_URL = 'http://localhost:8000/api';
  isLogged = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getActivities() {
    this.http.get(this.API_URL + '/activities?token=' + localStorage.getItem('access_token'), this.httpOptions).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
