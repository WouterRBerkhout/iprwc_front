import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {StateService} from "../state.service";
import {LoginModalComponent} from "./login-modal/login-modal.component";
import {ModalService} from "../modal/modal.service";

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
    private modalService: ModalService<LoginModalComponent>
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
        this.loggedIn = localStorage.getItem('user') != null;
      },
    });
  }

  async openLogin(): Promise<void> {
    await this.modalService.open(LoginModalComponent);
  }
}
