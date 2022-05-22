import { Component, OnInit } from '@angular/core';

import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isList: number = 50;
  isMenu: boolean = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
