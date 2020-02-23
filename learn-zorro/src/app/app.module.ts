import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';//zorro
//ngrx/store
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter';
import { lsyReducer } from './store/lsy.reducer';
// import { articleReducer } from "./store/article/reducer";
import { reducers, metaReducers } from "./store/article/metaReducer";

// component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgrxComponent } from "./component/ngrx/ngrx.component";
import { NgrxLsyComponent } from "./component/ngrx/ngrx.lsy.component";
import { NgrxChildComponent } from "./component/ngrx/ngrx.child.component";
import { ArticleComponent } from "./component/ngrx/article.component"

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    NgrxComponent,
    NgrxLsyComponent,
    NgrxChildComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ lsy: lsyReducer, count: counterReducer}), // 注册store
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
