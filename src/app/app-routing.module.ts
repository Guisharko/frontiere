import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, NoPreloading} from '@angular/router';
import {TemplateComponent} from './template/template.component';

const routes: Routes = [
  { path: 'dashboard',
  loadChildren: () =>
    import('./admin/admin.module').then( (m) => m.AdminModule) },
  { path: '', component: TemplateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
