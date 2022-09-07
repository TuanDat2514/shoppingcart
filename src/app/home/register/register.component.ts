import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../data/interface/item";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  user!:User;
  @Output() closeRegister=new EventEmitter<boolean>;
  constructor(private fb:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      fullname: new FormControl(
        '', [Validators.required]),
      email: new FormControl(
        '', [Validators.required]),
      gender: new FormControl(
        '', [Validators.required]),
      address: new FormControl(
        '', [Validators.required]),
      username: new FormControl(
        '', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      password: new FormControl(
        '', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
      confirmPassword: ['', Validators.required],
    })
  }
  onSubmit(){
    if(this.registerForm.value.password==this.registerForm.value.confirmPassword){
      let u={fullname:this.registerForm.value.fullname,email:this.registerForm.value.email,gender:this.registerForm.value.gender,address:this.registerForm.value.address,username:this.registerForm.value.username,password:this.registerForm.value.password,img:"https://icon-library.com/images/user-icon-jpg/user-icon-jpg-11.jpg",discount:[]}
      this.authService.register(u).subscribe((response)=>{});
    }
  }
  close(){
    this.closeRegister.emit(false);
  }

}

