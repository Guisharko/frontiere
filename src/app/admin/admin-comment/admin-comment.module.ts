import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCommentComponent } from './form-comment/form-comment.component';
import { AddCommentComponent } from './containers/add-comment/add-comment.component';
import { EditCommentComponent } from './containers/edit-comment/edit-comment.component';
import { ListCommentComponent } from './containers/list-comment/list-comment.component';
import {AdminCommentRoutingModule} from './admin-comment-routing.module';
import {AdminModule} from '../admin.module';



@NgModule({
  declarations: [FormCommentComponent, AddCommentComponent, EditCommentComponent, ListCommentComponent],
  imports: [
    CommonModule,
    AdminCommentRoutingModule,
    AdminModule
  ]
})
export class AdminCommentModule { }
