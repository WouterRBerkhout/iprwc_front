import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";
import {OrderItemsService} from "../order-items/order-items.service";

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css']
})
export class OrderOverviewComponent implements OnInit {

  constructor(public orderService: OrderService, public orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
  }

}
