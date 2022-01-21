import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SnackbarService } from './snackbar.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('show', [
      transition(':enter', [
        style({ bottom: '-100px', transform: 'translate(-50%, 0%)' }),
        animate(
          '200ms cubic-bezier(0, 0, 0.2, 1)',
          style({
            transform: 'translate(-50%, 0%)',
            opacity: 1,
            bottom: '0px',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms cubic-bezier(0.4, 0.0, 1, 1)',
          style({
            transform: 'translate(-50%, 0%)',
            opacity: 0,
            bottom: '-100px',
          })
        ),
      ]),
    ]),
  ],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  public show = false;
  public message: string;
  public type: string;
  private snackbarSubscription: Subscription;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.snackbarSubscription = this.snackbarService.snackbarState.subscribe(
      (state) => {
        this.type = state.type;
        this.message = state.message;
        this.show = state.show;

        setTimeout(() => {
          this.show = false;
        }, state.duration);
      }
    );
  }

  ngOnDestroy(): void {
    this.snackbarSubscription.unsubscribe();
  }
}
