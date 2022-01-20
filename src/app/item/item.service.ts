import {Injectable} from "@angular/core";
import {PageableInterface} from "../components/pageable.interface";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageType} from "../components/page.type";
import {ItemModel} from "./item-row/item.model";
import {environment} from "../../environments/environment";

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

}
