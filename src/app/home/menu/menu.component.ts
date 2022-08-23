import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output() closebtn=new EventEmitter<boolean>();
  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    const x=setTimeout(()=>{
      this.item=_item;
      this.loading=true;
      clearTimeout(x);
    },1000)
    this.data.Total.subscribe(data=>this.total=data);
  }
  selectedItem(item:any){
    this.selected=item;
    this.selectTopping=!this.selectTopping;
  }
  addItem(item: any) {
    this.selected=item;
    this.selectTopping=!this.selectTopping;
    let i=document.getElementById('btn-cart') as HTMLElement;
    i.style.display="none";
    this.closebtn.emit(false);
    /*this.total = this.total + this.selected.price;
    let exits = false;
    for (let i = 0; i < this.data.items.length; i++) {
      if (item.id == this.data.items[i].id) {
        this.data.items[i].qty = this.data.items[i].qty + 1;
        this.data.items[i].total +=this.selected.price;
        this.data.changeTotal(this.total);
        exits = true;
      }
    }
    if (!exits) {
      this.selected.total = this.selected.price * this.selected.qty;
      this.data.changeItem({
        id: this.selected.id,
        title: this.selected.title,
        des: this.selected.ingredient,
        price: this.selected.price,
        img: this.selected.img,
        qty: 1,
        toppings:[],//
        total: this.selected.price
      });
      this.data.changeTotal(this.total);
    }*/
  }
  closeTopping(event:any){
    this.selectTopping=event;
  }
}
