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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmationModalComponent} from "./confirmation-modal/confirmation-modal.component";



@NgModule({
  declarations: [
    PagedListComponent,
    ModalComponent,
    HeaderComponent,
    SnackbarComponent,
    EmptyListRowComponent,
    LoginModalComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
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
    EmptyListRowComponent,
    ConfirmationModalComponent
  ]
})
export class ComponentsModule { }
