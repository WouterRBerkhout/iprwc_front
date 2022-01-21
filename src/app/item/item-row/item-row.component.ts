import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from "./item.model";
import {ItemService} from "../item.service";
import {CartService} from "../../cart/cart.service";
import {CartItemModel} from "../../cart/cart-item.model";
import {SnackbarType} from "../../components/snackbar/snackbar-type.enum";
import {SnackbarService} from "../../components/snackbar/snackbar.service";
import {AddItemModalComponent} from "../add-item-modal/add-item-modal.component";
import {ModalService} from "../../components/modal/modal.service";
import {StateService} from "../../components/state.service";
import {ConfirmationModalComponent} from "../../components/confirmation-modal/confirmation-modal.component";
import {ConfirmationModel} from "../../components/confirmation-modal/confirmation.model";

@Component({
  selector: 'app-item',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {
  @Input() item: ItemModel;



  constructor(
    private snackbarService: SnackbarService,
    private itemService: ItemService,
    private cartService: CartService,
    private modalService: ModalService<AddItemModalComponent>,
    public stateService: StateService,
    public confirmationService: ModalService<ConfirmationModalComponent>
  ) {
  }

  ngOnInit(): void {
  }

  addToCart() {
    let index = this.isInCart()
    if(index < 0) {
      this.cartService.addToCart(new CartItemModel(this.item, 1))
    } else {
      this.cartService.changeQuantity(this.cartService.items[index], 1)
      this.snackbarService.show('Increased quantity', SnackbarType.SUCCESS);
    }
  }

  public isInCart(): number {
    for (let i = 0; i < this.cartService.items.length; i++) {
      if (this.cartService.items[i].item == this.item) {
        return i;
      }
    }
    return -1;
  }

  async openEdit(): Promise<void> {
    await this.modalService.open<ItemModel>(
      AddItemModalComponent,
      this.item
    );
  }

  deleteHandler(): void {
    this.itemService.deleteItem(this.item.id).subscribe({
      error: (err) => {
        this.snackbarService.show(err['error']['message'], SnackbarType.DANGER);
      },
      complete: () => {
        this.snackbarService.show('Item Deleted', SnackbarType.SUCCESS);
        this.itemService.observable.next('');
      },
    });
  }

  deleteItem(): void {
    this.confirmationService.open<ConfirmationModel>(
      ConfirmationModalComponent,
      new ConfirmationModel(
        'Are you sure you want to delete this Product?',
      this.deleteHandler.bind(this)
      )
    );
  }
}
