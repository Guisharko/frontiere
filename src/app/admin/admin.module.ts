import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {RouterModule} from '@angular/router';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminNavComponent} from './admin-nav/admin-nav.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ParametresComponent} from './parametres/parametres.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {AdminLoginModule} from './admin-login/admin-login.module';
import {JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

@NgModule({
  declarations: [AdminComponent, AdminNavComponent, ParametresComponent],
  exports: [
    AdminNavComponent,
    AdminComponent
  ],
  providers: [JwtHelperService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    AdminLoginModule
  ]
})
export class AdminModule {
}
