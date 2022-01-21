import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnackbarType } from './snackbar-type.enum';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarSubject = new Subject<any>();
  public snackbarState = this.snackbarSubject.asObservable();

  constructor() {}

  public show(
    message: string,
    type: SnackbarType = SnackbarType.SUCCESS,
    duration = 3000
  ) {
    this.snackbarSubject.next({
      show: true,
      message,
      type,
      duration,
    });
  }
}
