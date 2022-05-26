import { Component, OnInit } from '@angular/core';

import { BookDataService } from '../services/book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: any = [];
  pageData: any;
  pageNo: number = 0;
  lastPage = 0;
  currPage = 0;
  response: any[] = [];

  constructor(private bookData: BookDataService) {
    this.bookData.paginate(this.pageNo).subscribe((res) => {
      this.books = Object.values(res)[0];
      this.lastPage = Number(Object.values(res)[2]) - 1;
      console.log(res);
    });
  }
  addTobag(book: any) {
    this.bookData.addToBag(book);
  }
  prevPage() {
    this.pageNo--;
    this.currPage--;
    this.bookData.paginate(this.pageNo).subscribe((res) => {
      this.books = Object.values(res)[0];
    });
  }

  nextPage() {
    this.pageNo++;
    this.currPage++;
    this.bookData.paginate(this.pageNo).subscribe((res) => {
      this.books = Object.values(res)[0];
      this.lastPage = Number(Object.values(res)[2]) - 1;
      console.log(res);
    });

    console.log(this.books, this.lastPage);
  }
  ngOnInit(): void {}
}
