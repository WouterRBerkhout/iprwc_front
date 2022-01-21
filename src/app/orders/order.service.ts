import {Injectable} from "@angular/core";
import {PageableInterface} from "../components/pageable.interface";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageType} from "../components/page.type";
import {environment} from "../../environments/environment";
import {OrderModel} from "./order-row/order.model";
import {OrderItemModel} from "./order-item.model";

@Injectable({
  providedIn: 'root',
})
export class OrderService implements PageableInterface {
  observable: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {
  }

  public getPage(
    page: number,
    pageSize: number,
  ): Observable<PageType<OrderModel>> {
    const params = new HttpParams().set('size', pageSize).set('page', page);
    return this.http.get<PageType<OrderModel>>(environment.apiUrl + '/order', {
      params,
    })
  };

}
