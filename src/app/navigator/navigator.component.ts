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
  user!:User;
  submitted=this.data.submitted.value;
  dropuser:boolean=false;
  showLogin:boolean=false;
  showRegister:boolean=false;
  constructor(private data:DataService,private router:Router) { }

  ngOnInit(): void {
    this.data.Submitted.subscribe(data=>this.submitted=data);
    this.data.User.subscribe((user:User)=>this.user=user)
  }
  a(a:any){
    this.router.navigate([a]);
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
    this.showLogin=!this.showLogin
  }
  clickSignup(){
    this.showRegister=!this.showRegister;
  }
  closeLogin(event:any){
    this.showLogin=event;
  }
  closeRegister(event:any){
    this.showRegister=event;
  }
  logout(){
    this.submitted=!this.submitted;
    this.data.changeSubmit(this.submitted);
    this.data.changeUser({
      id: 0,
      fullname:'',
      email: '',
      gender: 0,
      address: '',
      username: '',
      password: '',
      img: '',
      discount:[{
        name:'',
        condition: 0,
        discount: 0,
      }]});
    this.router.navigate(['/home']);
  }
}
