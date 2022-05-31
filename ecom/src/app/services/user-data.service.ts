import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { AuthSecurityService } from './auth-security.service';
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  url = 'http://localhost:8080/';

  constructor(
    private http: HttpClient,
    private authService: AuthSecurityService
  ) {}

  users() {
    return this.http.get(this.url + 'allUsers');
  }

  saveUser(data: any) {
    return this.http.post(this.url + 'subscribe', data);
  }

  delMe(id: any) {
    return this.http.delete(this.url + 'user/' + id);
  }

  getUser(id: any) {
    return this.http.get(this.url + 'user/' + id);
  }

  addToBag(data: any) {
    console.log(localStorage.getItem('userId'));

    return this.http.get(
      this.url +
        'user/addtocart/' +
        localStorage.getItem('userId') +
        '/' +
        data,
      { responseType: 'text' }
    );
  }

  removeCartItem(id: any) {
    return this.http.get(
      this.url + 'user/deletecart/' + localStorage.getItem('userId') + '/' + id,
      { responseType: 'text' }
    );
  }

  getBag() {
    return this.http.get(
      this.url + 'user/cart/' + this.authService.getUserId()
    );
  }

  getMyOrders() {
    return this.http.get(
      this.url + 'user/' + 'myorders/' + this.authService.getUserId()
    );
  }

  
}
