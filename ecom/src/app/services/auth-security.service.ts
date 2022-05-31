import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthSecurityService {
  totalAmount: number = 0;
  url = 'http://localhost:8080';

  private noOfBooks = new BehaviorSubject<number>(0);
  newNoOfBooks = this.noOfBooks.asObservable();

  noOfBooksInCart: number = 0;

  changeNoOfBooks(n: number) {
    this.noOfBooks.next(n);
    this.noOfBooksInCart = n;
  }

  constructor(private http: HttpClient, private router: Router) {
   
    // http.get(this.url)

  }

  generateToken(credentials: any) {
    //token generate
    return this.http.post(`${this.url}/auth`, credentials).subscribe(
      (res: any) => {
        this.loginUser(res.response, res.role, res.userId);
        let cart: any;
        this.getCart(res.userId).subscribe({
          next: (data) => {
            cart = data;
            this.cartItems(cart.length);
            window.location.href = '/home';
          },
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCart(id: string) {
    return this.http.get(this.url + '/user/cart/' + id);
  }

  cartItems(item: string) {
    localStorage.setItem('noOfCart', item);
    return item;
  }

  payment() {
    return this.http.get(
      this.url + '/user/checkout/' + localStorage.getItem('userId'),
      { responseType: 'text' }
    );
  }

  getNoOfCartItems() {
    return localStorage.getItem('noOfCart');
  }

  loginUser(token: string, role: string, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('userId', userId);
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == null || token == undefined || token == '') {
      return false;
    } else {
      return true;
    }
  }

  isUserLoggedIn() {
    let role = localStorage.getItem('role');
    if (role == 'User') return true;
    else return false;
  }

  isAdminLoggedIn() {
    let role = localStorage.getItem('role');
    if (role == 'Admin') return true;
    else return false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('noOfCart');
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }
}
