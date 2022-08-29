import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
// import {_category, _item} from "../../../data/interface/item";
import {DataService} from "../../services/data.service";
import {HomeComponent} from "../home.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
 category:any;
 id=0;
  @Output() close=new EventEmitter<boolean>;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getCategory().subscribe(data=>{this.category=data;
      console.log(this.category)});
  }
  click(c:any){
    console.log(c);
    this.id=c.category;
    let itemfilter=new Array();
    // for (let i=0;i<_item.length;i++){
    //   if(c.category==_item[i].category){
    //     itemfilter.push(_item[i]);
    //   }
    // }
    this.data.getItembyCategory(c.category).subscribe(data=>{
      itemfilter=data;
      this.data.changeItems(itemfilter);
    });
    this.data.changeItems(itemfilter);
    if(window.innerWidth<415){
      this.close.emit(false);
    }
  }
}
