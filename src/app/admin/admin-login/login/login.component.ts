import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService
  ) {
  }
  email: string;
  password: string;

  ngOnInit() {
  }

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }
}
