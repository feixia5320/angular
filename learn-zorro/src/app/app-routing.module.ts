import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxComponent } from "./component/ngrx/ngrx.component";
import { NgrxLsyComponent } from "./component/ngrx/ngrx.lsy.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'ngrx', component: NgrxComponent},
  { path: 'ngrxLsy', component: NgrxLsyComponent},
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
