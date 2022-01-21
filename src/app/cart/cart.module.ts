import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import {ComponentsModule} from "../components/components.module";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    CartModalComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule
  ]
})
export class CartModule { }
