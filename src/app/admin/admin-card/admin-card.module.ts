import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormCardComponent} from './form-card/form-card.component';
import {AddCardComponent} from './containers/add-card/add-card.component';
import {EditCardComponent} from './containers/edit-card/edit-card.component';
import {ListCardComponent} from './containers/list-card/list-card.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminCardRoutingModule} from './admin-card-routing.module';
import {AdminModule} from '../admin.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [FormCardComponent, AddCardComponent, EditCardComponent, ListCardComponent],
  exports: [],
  imports: [
    CommonModule,
    AdminCardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    HttpClientModule
  ]
})
export class AdminCardModule {
}
