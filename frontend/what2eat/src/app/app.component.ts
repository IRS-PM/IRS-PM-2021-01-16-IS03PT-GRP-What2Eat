import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  /**
   * An object representing the user for the login form
   */
  public user: any;
  public title: any = 'What2Eat';
  constructor(public _userService: UserService) { }
 
  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }
 
  login() {
    this._userService.login(JSON.stringify({'username': this.user.username, 'password': this.user.password}));
  }
 
  refreshToken() {
    this._userService.refreshToken();
  }
 
  logout() {
    this._userService.logout();
  }
 
}