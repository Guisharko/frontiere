import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListDevisComponent} from './containers/list-devis/list-devis.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ListDevisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDevisRoutingModule {
}
