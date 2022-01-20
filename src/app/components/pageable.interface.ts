import { PageType } from './page.type';
import { Observable, Subject } from 'rxjs';

export interface PageableInterface {
  getPage(page: number, pageSize: number): Observable<PageType<any>>;

  observable: Subject<any>;
}
