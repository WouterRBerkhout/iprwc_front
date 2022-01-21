import {Component, OnInit, ViewChild} from '@angular/core';
import {PassableInterface} from "../../components/modal/passable.interface";
import {CartModel} from "../cart.model";
import {ModalComponent} from "../../components/modal/modal.component";
import {CartService} from "../cart.service";
import {SnackbarType} from "../../components/snackbar/snackbar-type.enum";
import {SnackbarService} from "../../components/snackbar/snackbar.service";
import {PurchaseResponse} from "../purchase.response.model";


@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent extends PassableInterface<CartModel> implements OnInit {
  @ViewChild('modalComponent') modal:
    ModalComponent<CartModalComponent>

  private purchaseId: any;

  constructor(
    public snackbarService: SnackbarService,
    public cartService: CartService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  public order(): void {
    this.cartService
      .createOrder()
      .subscribe({
        next: data=> {
          console.log(data.body.id);
          this.purchaseId = data.body.id;
          console.log(this.purchaseId);
        },
        error: (err) => {
          this.snackbarService.show(
            err['error']['message'],
            SnackbarType.DANGER
          );
        },
        complete: () => {
          this.snackbarService.show('Order Created', SnackbarType.SUCCESS);
          this.modal?.close();
          for (let i = 0; i < this.cartService.items.length; i++) {
            this.cartService.addItemToOrder(this.cartService.items[i], this.purchaseId).subscribe()
          }
          this.cartService.items = [];
        },
      });
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }

}
