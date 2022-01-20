import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "../components/components.module";
import { ItemRowComponent } from './item-row/item-row.component';
import { ItemOverviewComponent } from './item-overview/item-overview.component';



@NgModule({
  declarations: [
    ItemRowComponent,
    ItemOverviewComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ItemModule { }
