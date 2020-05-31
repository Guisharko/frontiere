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
    path: 'devis',
    loadChildren: () =>
      import('./admin-devis/admin-devis.module').then((m) => m.AdminDevisModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
