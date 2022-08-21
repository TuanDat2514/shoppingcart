import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {_item, Item, Topping} from "../../../data/interface/item";
import {_topping} from "../../../data/interface/item";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-topping',
  templateUrl: './add-topping.component.html',
  styleUrls: ['./add-topping.component.css']
})
export class AddToppingComponent implements OnInit {
  topping:Topping[]=[];
  inpValue=1;
  form!:FormGroup;
  inp=[
    {input:''},
    {input:''},
    {input:''},
    {input:''}
  ];
  @Input() selectedItem:any;
  @Output() closeModal=new EventEmitter<boolean>;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.checkTopping();
  }
  checkTopping(){
    let check=this.selectedItem.category;
    for (let i=0;i<_topping.length;i++){
      let fitertop=_topping[i].category.find(value => value==check)
      if(fitertop){
        this.topping.push(_topping[i]);
      }
    }
  }
  control(i:any){
    this.inpValue=this.inpValue+i;
  }
  close(){
    this.closeModal.emit(false);
  }
  click( i:any){

  }
}
