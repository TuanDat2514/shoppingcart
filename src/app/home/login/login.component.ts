import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators, FormGroup, AbstractControl, FormControl} from "@angular/forms";
// import {_user, User} from "../../../data/interface/item";
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../../data/interface/item";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() closeSignin = new EventEmitter<boolean>()
  formLogin!: FormGroup;
  submitted = false;
  message='';
  user!:any;
  invalidLogin = false;
  loginSuccess = false;
  successMessage!: string;
  constructor(private fb: FormBuilder,private authService:AuthService,private data:DataService) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: new FormControl(
        '', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      password: new FormControl(
        '', [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
    })
  }
  onSubmit(){
    this.authService.login(this.formLogin.value.username,this.formLogin.value.password).subscribe((response)=>{
      if(response){
        this.user=response;
        console.log(this.user[0]);
        this.invalidLogin = false;
        this.submitted = true;
        this.data.changeSubmit(false);
        this.successMessage = 'Login Successful.';
        this.authService.username=this.formLogin.value.username;
        this.authService.password=this.formLogin.value.password;
        this.authService.registerSuccessfulLogin(this.formLogin.value.username)
        // this.data.getUser(this.formLogin.value.username).subscribe(data=>{
        //   this.data.changeUser(data);
        // });
        this.data.changeUser(this.user[0]);
        this.closeSignin.emit(false);
      }
      else {
            this.message="Login failed";
          }
    })
  };
  close(){
    this.closeSignin.emit(false);
  }

  // onSubmit() {
  //  let info=this.formLogin.getRawValue();
  //  let check=_user.find(value => value.username===info.username&&value.password===info.password)
  //   if(check){
  //     this.submitted=true;
  //     this.data.changeSubmit(false);
  //     console.log(this.data.submitted.value);
  //     this.data.changeUser(check);
  //     this.closeSignin.emit(false);
  //   }else {
  //     this.message="Login failed";
  //   }
  // }
}
