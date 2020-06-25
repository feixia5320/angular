import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { AgentComponent } from "./agent/agent.component";
import { HeaderComponent } from "./header/header.component";
import { AsideLeftComponent } from "./aside-left/aside-left.component";
import { PopComponent } from './pop/pop.component';
import { PopService } from './service/pop.service';
import { HistoryReducer } from './aside-left/histroy.reducers';
const routes: Routes = [{ path: "**", component: AgentComponent, pathMatch: 'full' }];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    StoreModule.forRoot({history: HistoryReducer}),
  ],
  declarations: [
    AppComponent,
    AgentComponent,
    HeaderComponent,
    AsideLeftComponent,
    PopComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopComponent],
  providers: [PopService]
})
export class AppModule {}
