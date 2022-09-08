import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  user=this.data.user.getValue();
  historyuser!:any;
  item:any[]=[];
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getHistorybyUser(this.user.id).subscribe(data=>{
      this.historyuser=data;
    })
  }
  getBill(){

  }

}
