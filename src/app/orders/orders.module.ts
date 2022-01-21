import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { OrderRowComponent } from './order-row/order-row.component';
import {BrowserModule} from "@angular/platform-browser";
import {ComponentsModule} from "../components/components.module";
import { OrderItemRowComponent } from './order-items/order-item-row/order-item-row.component';
import { OrderItemModalComponent } from './order-items/order-item-modal/order-item-modal.component';



@NgModule({
  declarations: [
    OrderOverviewComponent,
    OrderRowComponent,
    OrderItemRowComponent,
    OrderItemModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule
  ]
})
export class OrdersModule { }
