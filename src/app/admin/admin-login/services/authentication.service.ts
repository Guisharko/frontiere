import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, public jwtHelper: JwtHelperService
  ) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['dashboard']);
        console.log('You are Successfully logged in!');
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut().then(res => {
      this.router.navigate(['/']);
    });
  }

}
