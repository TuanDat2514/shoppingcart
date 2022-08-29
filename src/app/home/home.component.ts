import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../services/data.service";
import {User} from "../../data/interface/item";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items=this.data.items;
  drop:boolean=false;
  drop1:boolean=false;
  @ViewChild(SidebarComponent) siderbar!:SidebarComponent;
  constructor(private data:DataService,private route:Router) { }
  showLogin:boolean=false;
  showCart:boolean=false;
  showCart1:boolean=true;
  submitted=this.data.submitted.value;
  user!:User;
  dropuser:boolean=false;
  ngOnInit(): void {
    this.data.Submitted.subscribe(data=>this.submitted=data);
    this.data.User.subscribe((user:User)=>this.user=user)

  }
  onHandler(event:any){
    this.showCart=event;
    this.showCart1=event;
    this.drop=event;
  }
  clickLogin(){
    this.showLogin=true;
  }
  close(event:any){
    this.showLogin=event;
  }
  click(){
   this.drop=!this.drop;
   this.drop1=false;
  }
  click1(){
    this.drop1=!this.drop1;
    this.drop=false;
  }
  a(a:any){
    this.route.navigate([a]);
  }
  openCart(){
    this.showCart=!this.showCart;
    let i=document.getElementById('btn-cart') as HTMLElement;
    i.style.display="none";
  }
  dropu(){
    this.dropuser=!this.dropuser;
  }
}
