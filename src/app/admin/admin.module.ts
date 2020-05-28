import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule} from '@angular/router';
import {AdminRoutingModule} from './admin-routing.module';
import { AdminNavComponent } from './admin-nav/admin-nav.component';

@NgModule({
  declarations: [AdminComponent, AdminNavComponent],
  exports: [
    AdminNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
