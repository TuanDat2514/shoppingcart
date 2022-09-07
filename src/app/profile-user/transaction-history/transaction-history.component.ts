import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  user=this.data.user.getValue();
  historyuser:any[]=[];
  idBill:any[]=[];
  listItem=[];
  item:any[]=[];
  Bill:any[]=[];
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getAllItems().subscribe(data=>this.listItem=data);
    this.data.getBillembedDetail().subscribe(res=> {
      for (let i=0;i<res.length;i++){
       if(this.user.id===res[i].userId){
         this.historyuser.push(res[i]);
       }
      }
      console.log(this.historyuser);
      this.getIdBill();
      this.getItem();
    });
  }
  getIdBill(){
    let idBill=new Array();
    for (let i=0;i<this.historyuser.length;i++){
      for (let j=0;j<this.historyuser[i].detail.length;j++){
       idBill.push(this.historyuser[i].detail[j].billId);
      }
    }
    let a=Array.from(new Set(idBill));
    for (let i=0;i<this.historyuser.length;i++){
      let bill={
        id:'',
        total:0,
        detail:[]
      };
      bill.total=this.historyuser[i].total;
      bill.id=a[i];
      this.Bill.push(bill);
    }
    console.log(this.Bill);
  }
  getItem(){
    let arrItem=new Array();
    for (let i=0;i<this.historyuser.length;i++){
      for (let j=0;j<this.historyuser[i].detail.length;j++){
        let item={itemId:'',toppingId:''};
        item.itemId=this.historyuser[i].detail[j].itemsId;
        item.toppingId=this.historyuser[i].detail[j].toppingId;
        arrItem.push(item);
      }
    }
    this.item= Array.from(new Set(arrItem));
  }
}
