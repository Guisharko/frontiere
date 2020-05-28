import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddCardComponent} from './containers/add-card/add-card.component';
import {ListCardComponent} from './containers/list-card/list-card.component';
import {EditCardComponent} from './containers/edit-card/edit-card.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddCardComponent},
  {path: 'list', component: ListCardComponent},
  {path: 'edit/:id', component: EditCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCardRoutingModule {
}
