import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyListRowComponent } from './empty-list-row.component';

describe('EmptyListRowComponent', () => {
  let component: EmptyListRowComponent;
  let fixture: ComponentFixture<EmptyListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmptyListRowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
