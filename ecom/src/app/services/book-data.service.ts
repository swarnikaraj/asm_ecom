import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  url = 'http://localhost:8080/';

  bag: any[] = [];

  cartNum = 0;
  constructor(private http: HttpClient) {}

  books() {
    return this.http.get(this.url + 'allbooks');
  }

  saveBook(data: any) {
    return this.http.post(this.url + 'addBook', data);
  }

  delMe(id: any) {
    return this.http.delete(`http://localhost:8080/book/${id}`, {
      responseType: 'text',
    });
  }

  getFilterByCat(cat: any) {
    return this.http.get(this.url + 'books/' + cat);
  }

  getbook(id: any) {
    return this.http.get(this.url + 'book/' + id);
  }

  numberOFbooks() {
    return this.http.get(this.url + 'allBooks');
  }

  addToBag(data: any) {
    this.bag.push(data);

    console.log(this.bag, 'Mai bag me aa gya ');
    this.cartNum++;
    return this.bag;
  }

  getBag() {
    return this.bag;
  }

  paginate(pageNo: any) {
    return this.http.get(this.url + 'books/' + 'pagination/' + pageNo + '/10');
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

  removeCartItem(id: any) {
    this.bag = this.bag.filter((i) => i.bookId != id);

    return this.bag;
  }
}
