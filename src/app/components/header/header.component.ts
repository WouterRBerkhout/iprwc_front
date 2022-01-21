import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {StateService} from "../state.service";
import {LoginModalComponent} from "./login-modal/login-modal.component";
import {ModalService} from "../modal/modal.service";
import {CartModalComponent} from "../../cart/cart-modal/cart-modal.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;

  constructor(
    private loginService: LoginService,
    private stateService: StateService,
    private modalService: ModalService<LoginModalComponent>,
    private cartModalService: ModalService<CartModalComponent>,
    private router: Router
  ) {}

  getUsername(): string {
    return this.stateService.getUser().username;
  }

  logout(): void {
    this.loginService.logout();
  }

  back(): void {
    this.loginService.redirectToHome(this.stateService.getUser());
  }

  ngOnInit(): void {
    this.loginService.checkIfLoggedIn().subscribe({
      next: (response) => {
        this.loggedIn = localStorage.getItem('user') == this.getUsername();
      },
    });
  }

  async openLogin(): Promise<void> {
    await this.modalService.open(LoginModalComponent);
  }

  async openCart(): Promise<void> {
    await this.cartModalService.open(CartModalComponent);
  }

  orders() {
    this.router.navigate(['orders']);
  }
}
