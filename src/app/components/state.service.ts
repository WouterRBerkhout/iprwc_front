import { Injectable } from '@angular/core';
import {UserModel} from "./user.model";

@Injectable({
  providedIn: 'root',
})
export class StateService {
  getUser(): UserModel {
    return JSON.parse(localStorage.getItem('user') || '{}') as UserModel;
  }

  setUser(user: UserModel) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
