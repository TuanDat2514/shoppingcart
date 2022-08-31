import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {User} from "../../data/interface/item";

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  user=this.data.user.getValue();
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.User.subscribe(data=>this.user=data);
  }

}
