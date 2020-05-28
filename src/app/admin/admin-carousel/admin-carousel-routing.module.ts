import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddCarouselComponent} from './containers/add-carousel/add-carousel.component';
import {ListCarouselComponent} from './containers/list-carousel/list-carousel.component';
import {EditCarouselComponent} from './containers/edit-carousel/edit-carousel.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddCarouselComponent},
  {path: 'list', component: ListCarouselComponent},
  {path: 'edit/:id', component: EditCarouselComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCarouselRoutingModule {
}
