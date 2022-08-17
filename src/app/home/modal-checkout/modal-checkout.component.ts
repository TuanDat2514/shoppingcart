import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-modal-checkout',
  templateUrl: './modal-checkout.component.html',
  styleUrls: ['./modal-checkout.component.css']
})
export class ModalCheckoutComponent implements OnInit {
  itemscart = this.data.items;
  total = 0;
  inp = 0;
  disabled: boolean = false;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.data.Total.subscribe(data => this.total = data);
  }

  closemodal() {
    this.closeModal.emit(false);
  }

  control(i: any, index: any, item: any) {
    if (item.qty >= 0) {
      this.disabled = false;
      if (i == 1) {
        this.total = this.total + item.price;
      }
      if (i == -1) {
        this.total = this.total - item.price;
      }
      this.itemscart[index].qty += i;
      this.data.changeTotal(this.total);
    }
    if (item.qty == 0) {
      this.disabled = true;
    }
  }

  removeItem(i: any, item: any) {
    this.data.items.splice(i, 1);
    if (this.data.items.length > 0) {
      this.total = this.total - item.total;
      this.data.changeTotal(this.total);
    }else{
      this.total = 0;
      // location.reload();
      this.data.changeTotal(0);
    }
  }
}
