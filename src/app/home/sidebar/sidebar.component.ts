import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  category=['Pizza','Bakery','Hot dog','Ice cream'];
  constructor() { }

  ngOnInit(): void {
  }

}
