import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "../components/components.module";
import { ItemRowComponent } from './item-row/item-row.component';
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import {CartModule} from "../cart/cart.module";
import {BrowserModule} from "@angular/platform-browser";
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ItemRowComponent,
    ItemOverviewComponent,
    AddItemModalComponent
  ],
  imports: [
    CartModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    ComponentsModule
  ]
})
export class ItemModule { }
