import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';


@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireAuthModule,
  ]
})
export class AdminLoginModule {
}
