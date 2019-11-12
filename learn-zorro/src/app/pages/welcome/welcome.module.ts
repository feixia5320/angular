import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
//引入zorro框架
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
