import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
// import { User } from 'src/data/interface/item';
import {DataService} from "../../services/data.service";
import {AddToppingComponent} from "../add-topping/add-topping.component";
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-modal-checkout',
  templateUrl: './modal-checkout.component.html',
  styleUrls: ['./modal-checkout.component.css']
})
export class ModalCheckoutComponent implements OnInit {
  itemscart = this.data.items;
  total = 0;
  inp = 0;
  user: any = this.data.user;
  disabled: boolean = false;
  opendialog: boolean = false;
  idbill: any;
  @Output() closeModal = new EventEmitter<boolean>();
  loading = false;

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.data.Total.subscribe(data => this.total = data);
    this.data.User.subscribe(data => this.user = data);
    console.log();
  }

  closemodal() {
    this.closeModal.emit(false);
    let i = document.getElementById('btn-cart') as HTMLElement;
    i.style.display = "block";
  }

  control(i: any, index: any, item: any) {
    const t = item.total;
    if (item.qty >= 0) {
      this.disabled = false;
      this.data.items[index].qty += i;
      let sumTop = 0;
      for (let i = 0; i < this.data.items[index].toppings[0].length; i++) {
        sumTop += this.data.items[index].toppings[0][i].price;
      }
      this.data.items[index].total = (item.price + sumTop) * item.qty;
      let sum = 0;
      for (let i = 0; i < this.data.items.length; i++) {
        console.log(this.data.items[i].total);
        sum += this.data.items[i].total;
      }
      this.data.changeTotal(sum);
      console.log(this.data.items)
    }
    if (item.qty == 0) {
      // this.disabled = true;
      let itemc = document.getElementsByClassName('cart-item');
      itemc[index].getElementsByClassName('btn-control')[0].setAttribute("disabled", 'true');
    }
  }

  removeItem(i: any, item: any) {
    this.data.items.splice(i, 1);
    if (this.data.items.length > 0) {
      this.total = this.total - item.total;
      this.data.changeTotal(this.total);
    } else {
      this.total = 0;
      // location.reload();
      this.data.changeTotal(0);
      this.data.changeBool(!this.data.bool);
    }
  }

  confirmCheckout() {
    this.loading = true;
    this.opendialog = false;
    let bill = {id:'', total: this.total, userId: this.user.id,detail:this.data.items};
    // this.data.postBill(bill).subscribe();
    // this.data.getBill().subscribe(data => {
    //   this.idbill = data[data.length - 1].id;
    //   console.log(data[data.length - 1].id);
    // })
    let x = setTimeout(() => {
      this.loading = false
      this.data.postHistory(bill).subscribe();
      this.data.items=[];
      this.data.changeTotal(0);
      this.data.changeBool(!this.data.bool);
      this.closeModal.emit(false);
      clearTimeout(x);
    }, 3000);
  }

  opencloseDialog() {
    this.opendialog = !this.opendialog;
  }

  removeTopping(topping: any, indexItem: any, j: any) {
    let i = this.data.items[indexItem].toppings[0][j].price;
    this.data.items[indexItem].toppings[0].splice(j, 1);
    this.data.items[indexItem].total = this.data.items[indexItem].total - i * this.data.items[indexItem].qty;
    this.data.changeTotal(this.data.total.value - i);
  }
}
