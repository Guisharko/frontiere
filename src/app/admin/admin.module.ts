import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule} from '@angular/router';
import {AdminRoutingModule} from './admin-routing.module';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AdminComponent, AdminNavComponent],
  exports: [
    AdminNavComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        AdminRoutingModule,
        FontAwesomeModule
    ]
})
export class AdminModule { }
