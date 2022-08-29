import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      username: new FormControl(
        '', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      password: new FormControl(
        '', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
      confirmPassword: ['', Validators.required],
    })
  }
  onSubmit(){

  }
}

