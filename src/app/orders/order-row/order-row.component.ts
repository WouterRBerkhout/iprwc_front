import {Component, Input, OnInit} from '@angular/core';
import {OrderModel} from "./order.model";
import {CartModalComponent} from "../../cart/cart-modal/cart-modal.component";
import {OrderService} from "../order.service";
import {OrderItemModalComponent} from "../order-items/order-item-modal/order-item-modal.component";
import {ModalService} from "../../components/modal/modal.service";
import {LoginModalComponent} from "../../components/header/login-modal/login-modal.component";
import {OrderItemModel} from "../order-item.model";

@Component({
  selector: 'app-order',
  templateUrl: './order-row.component.html',
  styleUrls: ['./order-row.component.css']
})
export class OrderRowComponent implements OnInit {
  @Input() order: OrderModel;

  constructor(private orderService: OrderService,
              private modalService: ModalService<OrderItemModalComponent>,) { }

  ngOnInit(): void {
  }

  async openOrderModal(order: OrderModel): Promise<void> {
    await this.modalService.open<OrderModel>(OrderItemModalComponent, order);
  }

}
