import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../services/data.service";
import {User} from "../../data/interface/item";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NavigatorComponent} from "../navigator/navigator.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  user = this.data.user.getValue();
  forminfo!: FormGroup;
  disabled1 = false;
  task = 'Account Infomation';
  message='';
  @ViewChild(NavigatorComponent) _nav!:NavigatorComponent;
  constructor(private data: DataService, private fb: FormBuilder,private router:Router) {
  }

  ngOnInit(): void {
    this.data.User.subscribe(data => this.user = data);
    this.forminfo = this.fb.group({
      fullname: '',
      email: '',
      gender: '',
      address: '',
    })
    this.forminfo.patchValue({
        fullname: this.user.fullname,
        email: this.user.email,
        gender: this.user.gender,
        address: this.user.address
      }
    )
    this.forminfo.disable();
  }

  changeTask(selectedTask: string) {
    this.task = selectedTask;
  }

  edit() {
    this.disabled1 = !this.disabled1;
    this.forminfo.enable();
  }

  submitedit() {
    console.log(this.forminfo.getRawValue());
    let user = this.user;
    user.fullname = this.forminfo.value.fullname;
    user.gender = this.forminfo.value.gender;
    user.email = this.forminfo.value.email;
    user.address = this.forminfo.value.address;
    this.data.updateUser(user).subscribe(response => {
      let code = response.status;
      if(code==200){
        this.forminfo.disable();
        this.message="Update Success"
      }
    });
  }
  logout(){
    this._nav.logout();
  }
}
