import {ItemModel} from "../item/item-row/item.model";

export class CartItemModel {
  constructor(
    public item: ItemModel,
    public quantity: number
  ) {
  }
}
