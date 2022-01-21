export class OrderItemModel {
  constructor(
    public purchaseId: string,
    public id: string,
    public name: string,
    public quantity: number,
    public price: number
  ) {
  }
}
