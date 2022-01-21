import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from "ngx-pagination";
import {PagedListComponent} from "./paged-list/paged-list.component";
import {HeaderComponent} from "./header/header.component";
import {EmptyListRowComponent} from "./paged-list/empty-list-row/empty-list-row.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import { LoginModalComponent } from './header/login-modal/login-modal.component';
import {SnackbarComponent} from "./snackbar/snackbar.component";
import {ModalComponent} from "./modal/modal.component";
import {LoginService} from "./login.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PagedListComponent,
    ModalComponent,
    HeaderComponent,
    SnackbarComponent,
    EmptyListRowComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LoginService
  ],
  exports: [
    PagedListComponent,
    HeaderComponent,
    LoginModalComponent,
    ModalComponent,
    SnackbarComponent,
    EmptyListRowComponent
  ]
})
export class ComponentsModule { }
