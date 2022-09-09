import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  @Input() idbill!:string;
  user=this.data.user.getValue();
  bill!:any;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getHistorybyId(this.idbill).subscribe(data=>{
        this.bill=data[0];
      console.log(this.bill.detail);
    })
  }
}
