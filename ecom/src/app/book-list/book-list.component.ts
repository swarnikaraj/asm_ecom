import { Component, OnInit } from '@angular/core';

import { BookDataService } from '../services/book-data.service';

import { SearchComponent } from '../search/search.component';

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
  cartNum: number = 0;
  bookList: any;
  catList: any[] = [];
  searchString: String = '';

  constructor(private bookData: BookDataService) {
    this.bookData.books().subscribe((data) => {
      this.bookList = data;

      for (let i = 0; i < this.bookList.length; i++) {
        let t = this.bookList[i].category;
        if (!this.catList.includes(t)) {
          this.catList.push(t);
        }
      }

      this.cartNum = bookData.cartNum;
    });

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

  filterByCat() {
    console.log('filter applied');
  }
  filterByAuth() {
    console.log('filter applied');
  }
  highToRating() {
    console.log('filter applied');
  }

  noFilter() {
    window.location.reload();
  }

  searchBooks(event: any) {
    var st = event.target.value;

    console.log(st);
  }
  getFilterByCat(cat: any) {
    this.bookData.getFilterByCat(cat).subscribe((data) => {
      console.log(data);
      this.books = data;
    });
  }
  getSortedByField(f: any) {
    this.bookData.getSortByField(f).subscribe((data) => {
      console.log(data);
      this.books = data;
      this.books = this.books.slice(0, 11).reverse();
    });
  }

  ngOnInit(): void {}
}
