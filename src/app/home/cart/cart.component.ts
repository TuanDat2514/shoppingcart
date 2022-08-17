import {Component, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Item} from "../../../data/interface/item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
  items=this.data.items;
  total=0;
  isEmpty:boolean=true;
  @Output() showCart=new EventEmitter<boolean>();
  constructor(private data: DataService) {
  }
  ngOnChanges(): void {
  }
  ngOnInit(): void {
    this.data.Total.subscribe(data=>this.total=data);
    this.data.Bool.subscribe((data)=>this.isEmpty=data);
  }
  checkout(){
    console.log(this.items)
    this.showCart.emit(true);
  }
}
