import {Component, Input, OnInit} from '@angular/core';
import {OrderItemModel} from "../../order-item.model";
import {OrderModel} from "../../order-row/order.model";
import {OrderItemsService} from "../order-items.service";
import {CartModalComponent} from "../../../cart/cart-modal/cart-modal.component";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item-row.component.html',
  styleUrls: ['./order-item-row.component.css']
})
export class OrderItemRowComponent implements OnInit {
  @Input() orderItem: OrderItemModel;

  constructor(private orderItemsService: OrderItemsService) {
  }

  ngOnInit(): void {

  }


}
