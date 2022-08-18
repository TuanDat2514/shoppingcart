import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data:DataService) { }
  showLogin:boolean=false;
  showCart:boolean=false;
  ngOnInit(): void {
   
  }
  onHandler(event:any){
    this.showCart=event;
  }
  clickLogin(){
    this.showLogin=true;
  }
  close(event:any){
    this.showLogin=event;
  }
}
