import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
// import * as item from 'src/data/interface/item';
import {DataService} from "../../services/data.service";
import {SidebarComponent} from "../sidebar/sidebar.component";
// import {_item} from "src/data/interface/item";
// import {_topping} from "src/data/interface/item";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,AfterViewInit {
  item!:any;
  total = 0;
  loading: boolean = false;
  selected: any;
  selectTopping: boolean = false;
  seachText!: string;
  category!:any;
  @Output() closebtn = new EventEmitter<boolean>();
  constructor(private data: DataService) {
  }

  ngAfterViewInit(): void {

    }
  ngOnInit(): void {
    let a=new Array();
    const x = setTimeout(() => {
      this.loading = true;
      this.data.getCategory().subscribe(res=>{this.category=res;
        for (let i=0;i<this.category.length;i++){
          let listitem = {title: '', items: new Array()};
          this.data.getItembyCategory(this.category[i].category).subscribe(data => {
            listitem.items = data;
            listitem.title = this.category[i].name;
            a.push(listitem);
          });
        }
      });
      this.item=a;
      console.log(this.item);
      clearTimeout(x);
    }, 1000)
    this.data.Total.subscribe(data => this.total = data);
    this.data.Itemfilter.subscribe(data => this.item = data);
  }

  selectedItem(item: any) {
    this.selected = item;
    this.selectTopping = !this.selectTopping;
  }

  addItem(item: any) {
    this.selected = item;
    this.selectTopping = !this.selectTopping;
    let i = document.getElementById('btn-cart') as HTMLElement;
    i.style.display = "none";
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

  closeTopping(event: any) {
    this.selectTopping = event;
  }
}
