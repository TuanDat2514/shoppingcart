import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {_item, Item, Topping} from "../../../data/interface/item";
import {_topping} from "../../../data/interface/item";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-add-topping',
  templateUrl: './add-topping.component.html',
  styleUrls: ['./add-topping.component.css']
})
export class AddToppingComponent implements OnInit {
  topping: Topping[] = [];
  inpValue = 1;
  form!: FormGroup;
  total = 0;
  totaltopping=0;
  inp = [
    {input: ''},
    {input: ''},
    {input: ''},
    {input: ''}
  ];
  showlist=[
    {show: false},
    {show: false},
    {show: false},
    {show: false}
  ]
  @Input() selectedItem: any;
  @Output() closeModal = new EventEmitter<boolean>;

  constructor(private fb: FormBuilder, private data: DataService) {
  }

  ngOnInit(): void {
    this.data.Total.subscribe(data => this.total = data);
    this.checkTopping();
  }

  checkTopping() {
    let check = this.selectedItem.category;
    for (let i = 0; i < _topping.length; i++) {
      let fitertop = _topping[i].category.find(value => value == check)
      if (fitertop) {
        this.topping.push(_topping[i]);
      }
    }
  }

  control(i: any) {
    this.inpValue = this.inpValue + i;
  }

  close() {
    this.closeModal.emit(false);
    let i=document.getElementById('btn-cart') as HTMLElement;
    i.style.display="block";
  }

  click(i: any) {
    console.log(this.inp)
  }

  addtocart() {
    this.data.changeBool(true);
    let selectedTopping = [];
    // selectedTopping=_topping[0].options.find(value => value.name==this.inp[0].input);
    // console.log(selectedTopping)
    for (let i = 0; i < this.inp.length; i++) {
      if (this.inp[i].input!='') {
        for (let j = 0; j < _topping.length; j++) {
          let check=_topping[j].options.find(value =>value.name == this.inp[i].input)
          if(check){
            selectedTopping.push(check);
            this.totaltopping=this.totaltopping+check.price;
          }
        }
      }
    }
    let exits = false;
    for (let i = 0; i < this.data.items.length; i++) {
      if (this.selectedItem.id == this.data.items[i].id) {
        this.data.items[i].qty = this.data.items[i].qty + this.inpValue;
        this.data.items[i].total += this.selectedItem.price+this.totaltopping;
        exits = true;
      }
    }
    if (!exits) {
      this.data.changeItem({
        id: this.selectedItem.id,
        title: this.selectedItem.title,
        des: this.selectedItem.ingredient,
        price: this.selectedItem.price,
        img: this.selectedItem.img,
        qty: this.inpValue,
        toppings: [selectedTopping],//
        total: this.selectedItem.price*this.inpValue+this.totaltopping
      });
    }
    console.log(this.data.items)
    let sum=0;
    for(let i=0;i<this.data.items.length;i++){
      console.log(this.data.items[i].total);
      sum+=this.data.items[i].total;
    }
    this.data.changeTotal(sum);
  }
  show(i:any){
    this.showlist[i].show=!this.showlist[i].show;
    console.log(this.showlist)
  }
}
