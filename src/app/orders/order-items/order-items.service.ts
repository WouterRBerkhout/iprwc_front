import {Observable, Subject} from "rxjs";
import {PageType} from "../../components/page.type";
import {OrderItemModel} from "../order-item.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Injectable, Input} from "@angular/core";
import {PageableInterface} from "../../components/pageable.interface";


@Injectable({
  providedIn: 'root',
})
export class OrderItemsService implements PageableInterface {
  public purchaseId: string;

  observable: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {

  }

  public getPage(
    page: number,
    pageSize: number,
  ): Observable<PageType<OrderItemModel>> {
    const params = new HttpParams().set('size', pageSize).set('page', page);
    return this.http.get<PageType<OrderItemModel>>(environment.apiUrl + '/order/' + this.purchaseId + '/items', {
      params,
    })
  };
}
