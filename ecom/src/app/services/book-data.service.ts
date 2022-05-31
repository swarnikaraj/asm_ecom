import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { AuthSecurityService } from './auth-security.service';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  url = 'http://localhost:8080/';

  bag: any[] = [];

  cartNum = 0;
  constructor(
    private http: HttpClient,
    private authService: AuthSecurityService
  ) {}

  books() {
    return this.http.get(this.url + 'allbooks');
  }

  saveBook(data: any) {
    return this.http.post(this.url + 'addbook', data, { responseType: 'text' });
  }

  delMe(id: any) {
    return this.http.get(`http://localhost:8080/book/delete/${id}`, {
      responseType: 'text',
    });
  }

  getFilterByCat(cat: any) {
    return this.http.get(this.url + 'books/category/' + cat);
  }

  getbook(id: any) {
    return this.http.get(this.url + 'book/' + id);
  }

  numberOFbooks() {
    return this.http.get(this.url + 'allBooks');
  }

  paginate(pageNo: any) {
    return this.http.get(this.url + 'books/' + 'pagination/' + pageNo);
  }

  getSortByField(field: any) {
    return this.http.get(this.url + 'books/' + 'sort/' + field);
  }

  getSearchData(word: any) {
    return this.http.get(this.url + 'books/' + 'search/' + word);
  }

  getCartNum() {
    return this.bag.length;
  }

  updateBook(id: any, book: any) {
    return this.http.post(this.url + 'book/' + 'update/' + id, book, {
      responseType: 'text',
    });
  }
}
