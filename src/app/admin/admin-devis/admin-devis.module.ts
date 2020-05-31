import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDevisComponent } from './containers/list-devis/list-devis.component';
import {AdminModule} from '../admin.module';
import {SharedModule} from '../../shared/shared.module';
import {AdminDevisRoutingModule} from './admin-devis-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListDevisComponent],
  exports: [],
  imports: [
    CommonModule,
    AdminModule,
    SharedModule,
    AdminDevisRoutingModule,
    FormsModule,
  ]
})
export class AdminDevisModule { }
