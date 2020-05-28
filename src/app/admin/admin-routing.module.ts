import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {
    path: 'card',
    loadChildren: () =>
      import('./admin-card/admin-card.module').then((m) => m.AdminCardModule)
  },
  {
    path: 'carousel',
    loadChildren: () =>
      import('./admin-carousel/admin-carousel.module').then((m) => m.AdminCarouselModule)
  },
  {
    path: 'comment',
    loadChildren: () =>
      import('./admin-comment/admin-comment.module').then((m) => m.AdminCommentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
