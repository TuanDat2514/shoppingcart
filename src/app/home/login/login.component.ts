import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators, FormGroup, AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() closeSignin = new EventEmitter<boolean>()
  formLogin!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
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
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    }
  }
}
