import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() closeSignin =new EventEmitter<boolean>()
  formLogin=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  close(){
    this.closeSignin.emit(false);
  }
  onSubmit(){

  }
}
