import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxComponent } from "./component/ngrx/ngrx.component";
import { NgrxLsyComponent } from "./component/ngrx/ngrx.lsy.component";
import { ArticleComponent } from "./component/ngrx/article.component";
import { ModalComponent } from './component/modal/modal/modal.component';
import { EnumComponent } from "./component/ts/enum/enum.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'ngrx', component: NgrxComponent},
  { path: 'ngrxLsy', component: NgrxLsyComponent},
  { path: 'article', component: ArticleComponent},
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  // 或 预加载指定模块data:{preload: true}
  // { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomeModule', data:{preload: true}}
  { path: 'modal', component: ModalComponent},
  { path: 'ts', component: EnumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
