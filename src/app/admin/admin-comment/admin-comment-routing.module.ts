import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddCommentComponent} from './containers/add-comment/add-comment.component';
import {ListCommentComponent} from './containers/list-comment/list-comment.component';
import {EditCommentComponent} from './containers/edit-comment/edit-comment.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddCommentComponent},
  {path: 'list', component: ListCommentComponent},
  {path: 'edit/:id', component: EditCommentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCommentRoutingModule {
}
