import { Component, OnInit } from '@angular/core';

import { BookListComponent } from '../book-list/book-list.component';
import { AuthSecurityService } from '../services/auth-security.service';

import { BookDataService } from '../services/book-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isList: number = 50;
  isMenu: boolean = false;
  numOfBooks: number = 0;

  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;

  constructor(private bookData: BookDataService,private authService:AuthSecurityService) {
  }

  ngOnInit(): void {
  }
}
