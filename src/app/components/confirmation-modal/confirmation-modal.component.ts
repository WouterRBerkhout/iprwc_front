import { Component, ViewChild } from '@angular/core';
import { PassableInterface } from '../modal/passable.interface';
import { ModalComponent } from '../modal/modal.component';
import { ConfirmationModel } from './confirmation.model';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModalComponent extends PassableInterface<ConfirmationModel> {
  @ViewChild('modalComponent')
  modal: ModalComponent<ConfirmationModalComponent>;
  public title: string;

  constructor() {
    super();
  }

  ok(): void {
    this.object.handler();
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}
