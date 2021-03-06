import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCarouselComponent } from './form-carousel/form-carousel.component';
import { AddCarouselComponent } from './containers/add-carousel/add-carousel.component';
import { EditCarouselComponent } from './containers/edit-carousel/edit-carousel.component';
import { ListCarouselComponent } from './containers/list-carousel/list-carousel.component';
import {AdminCarouselRoutingModule} from './admin-carousel-routing.module';
import {AdminModule} from '../admin.module';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [FormCarouselComponent, AddCarouselComponent, EditCarouselComponent, ListCarouselComponent],
  imports: [
    CommonModule,
    AdminCarouselRoutingModule,
    AdminModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminCarouselModule { }
