import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import {PageableInterface} from "../pageable.interface";
import {PageType} from "../page.type";


@Component({
  selector: 'app-paged-list-component',
  templateUrl: './paged-list.component.html',
  styleUrls: ['./paged-list.component.css'],
})
export class PagedListComponent implements OnInit {
  @Input() pageableInterface: PageableInterface;

  @ContentChild('row', { static: false }) rowTemplate: TemplateRef<any>;

  private _page: PageType<any>;
  pageSize = 10;

  ngOnInit(): void {
    this.getPage(0);
    this.pageableInterface.observable.subscribe(() => {
      this.getPage(this.page.pageable.pageNumber);
    });
  }

  handlePageChange(event: number): void {
    this.getPage(event - 1);
  }

  private getPage(pageNumber: number): void {
    this.pageableInterface
      .getPage(pageNumber, this.pageSize)
      .subscribe((page) => {
        this.page = { ...page };
      });
  }

  get page(): PageType<any> {
    return this._page;
  }

  set page(value: PageType<any>) {
    this._page = value;
  }
}
