import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../data/interface/item";
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  drop:boolean=false;
  drop1:boolean=false;
  @Output() showLogin=new EventEmitter<boolean>;
  user!:User;
  submitted=this.data.submitted.value;
  dropuser:boolean=false;
  constructor(private data:DataService,private route:Router) { }

  ngOnInit(): void {
    this.data.Submitted.subscribe(data=>this.submitted=data);
    this.data.User.subscribe((user:User)=>this.user=user)
  }
  a(a:any){
    this.route.navigate([a]);
  }
  dropu(){
    this.dropuser=!this.dropuser;
  }
  click(){
    this.drop=!this.drop;
    this.drop1=false;
  }
  click1(){
    this.drop1=!this.drop1;
    this.drop=false;
  }
  clickLogin(){
    this.showLogin.emit(true);
  }
}
