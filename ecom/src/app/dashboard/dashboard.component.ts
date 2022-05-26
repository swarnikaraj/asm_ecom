import { Component, OnInit } from '@angular/core';

import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isList: number = 5;
  isMenu: boolean = false;
 
  constructor() {}

  ngOnInit(): void {}
}
