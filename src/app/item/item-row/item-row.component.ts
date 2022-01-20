import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from "./item.model";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-item',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {
  @Input() item: ItemModel;


  constructor(
    private itemsService: ItemService
  ) {
  }

  ngOnInit(): void {
  }

}
