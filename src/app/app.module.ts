import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ComponentsModule} from "./components/components.module";
import {ItemModule} from "./item/item.module";
import {AppRoutingModule} from "./app-routing.module";
import {CartModule} from "./cart/cart.module"
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./components/auth.interceptor";
import {OrdersModule} from "./orders/orders.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ItemModule,
    CartModule,
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    OrdersModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
