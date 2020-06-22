import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {LoginComponent} from './admin-login/login/login.component';
import {AuthGuardService} from './admin-login/services/auth-guard.service';

const routes: Routes = [
  {path: '',  canActivate: [AuthGuardService],
    component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'card',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./admin-card/admin-card.module').then((m) => m.AdminCardModule)
  },
  {
    path: 'carousel',
    canActivate: [AuthGuardService],

    loadChildren: () =>
      import('./admin-carousel/admin-carousel.module').then((m) => m.AdminCarouselModule)
  },
  {
    path: 'devis',
    canActivate: [AuthGuardService],
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
