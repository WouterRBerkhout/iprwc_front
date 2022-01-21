import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {ModalService} from "../../components/modal/modal.service";
import {AddItemModalComponent} from "../add-item-modal/add-item-modal.component";
import {StateService} from "../../components/state.service";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
})
export class ItemOverviewComponent implements OnInit {

  constructor(public itemService: ItemService,
              private modalService: ModalService<AddItemModalComponent>,
              public stateService: StateService) { }

  ngOnInit(): void {

  }

  async openModal(): Promise<void> {
    await this.modalService.open(AddItemModalComponent)

  }
}
