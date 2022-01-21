import {Component, OnInit, ViewChild} from '@angular/core';
import {PassableInterface} from "../../components/modal/passable.interface";
import {ItemModel} from "../item-row/item.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../item.service";
import {ModalComponent} from "../../components/modal/modal.component";
import {AddItemType} from "./add-item.type";
import {SnackbarType} from "../../components/snackbar/snackbar-type.enum";
import {SnackbarService} from "../../components/snackbar/snackbar.service";

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html'
})
export class AddItemModalComponent extends PassableInterface<ItemModel> implements OnInit {
  @ViewChild('modalComponent') modal: ModalComponent<AddItemModalComponent>
  name: string;
  price: number;
  stock: number;

  addItemForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private itemService: ItemService,
    private snackbarService: SnackbarService
  ) {
    super()
    this.addItemForm = this.fb.group( {
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      stock: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    if (this.object) {
      this.name = this.object.name;
      this.price = this.object.price;
      this.stock = this.object.stock;
    }
  }

  async handleButton(): Promise<void> {
    const item: AddItemType = {
      name: this.name,
      price: this.price,
      stock: this.stock
    };

    if (this.object) {
      await this.updateItem(item);
    } else {
      await this.createItem(item);
    }
  }

  async updateItem(item: AddItemType): Promise<void> {
    this.itemService.updateItem(item, this.object.id).subscribe({
      error: (err) => {
        this.snackbarService.show(err['error']['message'], SnackbarType.DANGER);
      },
      complete: () => {
        this.snackbarService.show('Item Updated', SnackbarType.SUCCESS);
        this.itemService.observable.next('');
        this.modal?.close();
      },
    });
  }


  async createItem(item: AddItemType): Promise<void> {
    this.itemService.addItem(item).subscribe({
      error: (err) => {
        this.snackbarService.show(err['error']['message'], SnackbarType.DANGER);
      },
      complete: () => {
        this.snackbarService.show('Item Created', SnackbarType.SUCCESS);
        this.itemService.observable.next('');
        this.modal?.close();
      },
    });
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}
