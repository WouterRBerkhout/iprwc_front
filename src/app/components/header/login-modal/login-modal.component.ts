import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../login.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../../snackbar/snackbar.service";
import {SnackbarType} from "../../snackbar/snackbar-type.enum";
import {PassableInterface} from "../../modal/passable.interface";
import {LoginModel} from "../../login.model";
import {ModalComponent} from "../../modal/modal.component";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent extends PassableInterface<LoginModel> implements OnInit {
  @ViewChild('modalComponent') modal:
    ModalComponent<LoginModalComponent>
  @ViewChild('username') usernameInputField: ElementRef;
  @ViewChild('password') passwordInputField: ElementRef;

  public loginForm: FormGroup;
  public disabled: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public loginService: LoginService,
    public router: Router,
    public snackbarService: SnackbarService
  ) {
    super();
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(128)]],
      password: ['', [Validators.required, Validators.maxLength(128)]],
    });
    this.disabled = true;
    this.loginForm.statusChanges.subscribe((status) => {
      this.disabled = status !== 'VALID';
    });
  }

  ngOnInit(): void {
    this.loginService.checkIfLoggedIn().subscribe({
      next: (response) => {
        this.loginService.redirectToHome(response);
      },
    });
  }

  public onClickSubmit(): void {
    if (document.activeElement.id == "login") {
      this.login()
    } else if (document.activeElement.id == "signup") {
      this.signup()
    } else {
      this.snackbarService.show(
        'Invalid input',
        SnackbarType.DANGER,
        5000
      );
    }
  }

  public signup(): void {
    if (!this.validate()) return;
    this.loginService
      .signup(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next: (response) => {
          this.loginService.redirectToHome(response);
        },
        error: (error: string) => {
          console.error(error);
          this.snackbarService.show(
            'Username already in use',
            SnackbarType.DANGER,
            5000
          );
          this.loginForm.reset('');
        },
        complete: () => {
          this.snackbarService.show('Signed up!', SnackbarType.SUCCESS);
          this.modal?.close();
        },
      });

  }

  public login(): void {
    if (!this.validate()) return;
    this.loginService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next: (response) => {
          this.loginService.redirectToHome(response);
        },
        error: (error: string) => {
          console.error(error);
          this.snackbarService.show(
            'Incorrect username or password.',
            SnackbarType.DANGER,
            5000
          );
          this.loginForm.reset('');
        },
        complete: () => {
          this.snackbarService.show('Logged in', SnackbarType.SUCCESS);
          this.modal?.close();
        },
      });
  }

  public validate(): boolean {
    if (this.loginForm.valid) return true;
    const errorMessage = 'validation error';
    this.snackbarService.show(errorMessage, SnackbarType.DANGER);
    return false;
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}
