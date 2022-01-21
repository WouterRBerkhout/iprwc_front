import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StateService } from './state.service';
import { Router } from '@angular/router';
import {UserModel} from "./user.model";

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    private stateService: StateService,
    private router: Router
  ) {
  }

  public login(username: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(environment.apiUrl + '/auth/login', {
      username,
      password,
    });
  }

  public checkIfLoggedIn(): Observable<UserModel> {
    return this.http.get<UserModel>(environment.apiUrl + '/auth/user');
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.http
      .post<void>(environment.apiUrl + '/auth/logout', {})
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }

  public redirectToHome(user: UserModel) {
    this.stateService.setUser(user);
    this.router.navigate(['']);
  }
}
