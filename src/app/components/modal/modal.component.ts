import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { PassableInterface } from './passable.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent<T extends PassableInterface<any>> {

  constructor(private modalService: ModalService<T>) {}

  async close(): Promise<void> {
    await this.modalService.close();
  }
}
