import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
})
export class ItemOverviewComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
  }

}
