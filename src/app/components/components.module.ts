import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from "ngx-pagination";
import {PagedListComponent} from "./paged-list/paged-list.component";
import {HeaderComponent} from "./header/header.component";
import {EmptyListRowComponent} from "./paged-list/empty-list-row/empty-list-row.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    PagedListComponent,
    HeaderComponent,
    EmptyListRowComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    PagedListComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
