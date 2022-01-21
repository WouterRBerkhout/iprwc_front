import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {PassableInterface} from "../../../components/modal/passable.interface";
import {OrderItemModel} from "../../order-item.model";
import {ModalComponent} from "../../../components/modal/modal.component";
import {OrderItemsService} from "../order-items.service";
import {OrderModel} from "../../order-row/order.model";

@Component({
  selector: 'app-order-item-modal',
  templateUrl: './order-item-modal.component.html',
  styleUrls: ['./order-item-modal.component.css']
})
export class OrderItemModalComponent extends PassableInterface<OrderModel> implements OnInit{
  @ViewChild('modalComponent') modal:
    ModalComponent<OrderItemModalComponent>


  constructor(
    public orderItemsService: OrderItemsService
  ) {
    super()
  }

  ngOnInit(): void {
    console.log(this.object.id)
    this.orderItemsService.purchaseId = this.object.id
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}
