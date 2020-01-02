import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';


const routes: Routes = [{
  path: '', component: HomeComponent
},{
  path: 'rxjs', component: RxjsComponent,
},{
  path: 'home', component: HomeComponent,
},{
  path: '', component: HomeComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
