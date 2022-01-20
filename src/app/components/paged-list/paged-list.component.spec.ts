import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedListComponent } from './paged-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../../../../../IdeaProjects/IPSEN3-CKM-FRONT/src/app/user/user.service';
import { NgxPaginationModule } from 'ngx-pagination';

describe('PagedListComponent', () => {
  let component: PagedListComponent;
  let fixture: ComponentFixture<PagedListComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxPaginationModule],
      providers: [UserService],
      declarations: [PagedListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedListComponent);
    userService = fixture.debugElement.injector.get<UserService>(UserService);
    component = fixture.componentInstance;
    component.pageableInterface = userService;
    component.page = {
      content: [],
      pageable: {
        sort: {
          empty: false,
          sorted: false,
          unsorted: true,
        },
        offset: 1,
        pageNumber: 1,
        pageSize: 10,
        paged: true,
        unpaged: false,
      },
      last: true,
      totalElements: 10,
      totalPages: 1,
      size: 10,
      number: 1,
      sort: {
        empty: false,
        sorted: false,
        unsorted: true,
      },
      first: true,
      numberOfElements: 10,
      empty: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
