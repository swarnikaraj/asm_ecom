import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isList: number = 5;
  isMenu: boolean = false;
  isSearch: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
