import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';

import {ProductService} from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import {LoggerService} from './shared/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService, LoggerService],
  /*
  providers: [{
    provide: ProductService,
    useFactory: () => {
      let logger = new LoggerService();
      let dev = Math.random() > 0.5;
      if (dev) {
        return new ProductService(logger);
      }else {
        return new AnotherProductService(logger);
      }
    }
  }, LoggerService],
  */
  bootstrap: [AppComponent]
})
export class AppModule { }
