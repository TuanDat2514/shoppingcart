import {Component, OnInit} from '@angular/core';
import * as item from 'src/data/interface/item';
import {DataService} from "../../services/data.service";
import {_item} from "src/data/interface/item";
import {_topping} from "src/data/interface/item";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  item: any;
  total = 0;
  loading:boolean=false;
  selected:any;
  selectTopping:boolean=false;
  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    const x=setTimeout(()=>{
      this.item=_item;
      this.loading=true;
      clearTimeout(x);
    },3000)
    this.data.Total.subscribe(data=>this.total=data);
  }
  selectedItem(item:any){
    this.selected=item;
    this.selectTopping=!this.selectTopping;
  }
  addItem(item: any) {
    console.log(this.data.total.getValue())
    this.total = this.total + item.price;
    this.data.changeBool(true);
    let exits = false;
    for (let i = 0; i < this.data.items.length; i++) {
      if (item.id == this.data.items[i].id) {
        this.data.items[i].qty = this.data.items[i].qty + 1;
        this.data.items[i].total +=item.price;
        this.data.changeTotal(this.total);
        exits = true;
      }
    }

    if (!exits) {
      item.total = item.price * item.qty;
      this.data.changeItem({
        id: item.id,
        title: item.title,
        des: item.ingredient,
        price: item.price,
        img: item.img,
        qty: 1,
        toppings:[],//
        total: item.price
      });
      this.data.changeTotal(this.total);
    }
  }
  closeTopping(event:any){
    this.selectTopping=event;
  }
}
