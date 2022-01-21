import {EventEmitter, Injectable} from "@angular/core";
import {PageableInterface} from "../components/pageable.interface";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageType} from "../components/page.type";
import {ItemModel} from "./item-row/item.model";
import {environment} from "../../environments/environment";
import {CartModel} from "../cart/cart.model";
import {AddItemType} from "./add-item-modal/add-item.type";

@Injectable({
  providedIn: 'root',
})
export class ItemService implements PageableInterface {
  observable: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {
  }

  public getPage(
    page: number,
    pageSize: number
  ): Observable<PageType<ItemModel>> {
    const params = new HttpParams().set('size', pageSize).set('page', page);
    return this.http.get<PageType<ItemModel>>(environment.apiUrl + '/item', {
      params,
    })
  };

  public addItem(item: AddItemType): Observable<any> {
    return this.http.post(environment.apiUrl + "/item", item)
  }


  public updateItem(item: AddItemType, id: string): Observable<any> {
    return this.http.patch(environment.apiUrl + "/item/" + id, item)
  }

  public deleteItem(id: string): Observable<any> {
    return this.http.delete(environment.apiUrl + "/item/" + id);
  }
}
