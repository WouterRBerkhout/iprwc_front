import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ItemModel} from "../item/item-row/item.model";
import {CartModel} from "./cart.model";
import {SnackbarService} from "../components/snackbar/snackbar.service";
import {SnackbarType} from "../components/snackbar/snackbar-type.enum";
import {CartItemModel} from "./cart-item.model";
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  observable: Subject<any> = new Subject<any>();
  public items: CartItemModel[] = [];

  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {
  }

  public addToCart(item: CartItemModel) {
    this.items.push(item)
    this.snackbarService.show('Item added', SnackbarType.SUCCESS);
  }

  public createOrder(): Observable<any> {
    return this.http.post(environment.apiUrl + "/order", null, {observe: 'response' as 'body'});
  }

  public addItemToOrder(cartItem: CartItemModel, purchaseId: String): Observable<any> {
    return this.http.post(environment.apiUrl + "/order/" + purchaseId + "/items", null,
      {params: new HttpParams().set('itemId', cartItem.item.id).set('quantity', cartItem.quantity)})
  }

  public changeQuantity(cartItem: CartItemModel, change: number) {
    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
      this.items.splice(this.items.indexOf(cartItem),1)
    }
  }


}
