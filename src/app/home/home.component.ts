import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items=this.data.items;
  drop:boolean=false;
  constructor(private data:DataService) { }
  showLogin:boolean=false;
  showCart:boolean=false;
  showCart1:boolean=true;
  submitted=this.data.submitted.value;
  ngOnInit(): void {
    this.data.Submitted.subscribe(data=>this.submitted=data);
  }
  onHandler(event:any){
    this.showCart=event;
    this.showCart1=event;
  }
  clickLogin(){
    this.showLogin=true;
  }
  close(event:any){
    this.showLogin=event;
  }
  click(){
   this.drop=!this.drop;
  }
}
