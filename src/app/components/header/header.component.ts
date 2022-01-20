import { Component } from '@angular/core';
import { LoginService } from '../../../../../../IdeaProjects/IPSEN3-CKM-FRONT/src/app/login/login.service';
import { StateService } from '../../../../../../IdeaProjects/IPSEN3-CKM-FRONT/src/app/components/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private loginService: LoginService,
    private stateService: StateService
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
}
