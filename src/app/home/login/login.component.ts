import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators, FormGroup, AbstractControl, FormControl} from "@angular/forms";
import {_user} from "../../../data/interface/item";
import {innerFrom} from "rxjs/internal/observable/innerFrom";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() closeSignin = new EventEmitter<boolean>()
  formLogin!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,private data:DataService) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: new FormControl(
        '', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      password: new FormControl(
        '', [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
    })
  }

  close() {
    this.closeSignin.emit(false);
  }

  onSubmit() {
   let info=this.formLogin.getRawValue();
   let check=_user.find(value => value.username===info.username&&value.password===info.password)
    if(check){
      this.submitted=true;
      this.data.changeSubmit(false);
      console.log(this.data.submitted.value);
    }
  }
}
