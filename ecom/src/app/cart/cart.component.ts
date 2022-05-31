import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSecurityService } from '../services/auth-security.service';
import { BookDataService } from '../services/book-data.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  bag: any = [];
  totalCost: number = 0;

  constructor(
    private bookData: BookDataService,
    private router: Router,
    private authService: AuthSecurityService,
    private userservice: UserDataService
  ) {
    this.total();
  }

  total() {
    this.userservice.getBag().subscribe((res: any) => {
      this.bag = res;
      for (let i = 0; i < this.bag.length; i++) {
        this.totalCost = this.totalCost + Number(this.bag[i].bookPrice);
      }
    });
  }

  redirect() {}

  removeItem(id: any) {
    // let bg = this.bookData.removeCartItem(id);
    // this.bag = bg;
    // this.totalCost = 0;
    // for (let i = 0; i < this.bag.length; i++) {
    //   this.totalCost = this.totalCost + Number(this.bag[i].bookPrice);
    // }
    alert('Are you sure you want to remove this book');
    this.userservice.removeCartItem(id).subscribe(
      (res) => {
        console.log('book is deleted');
        this.totalCost = 0;
        this.total();
        this.authService.changeNoOfBooks(this.authService.noOfBooksInCart - 1);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  checkout() {
    this.authService.totalAmount = this.totalCost;
    this.router.navigate(['/payment']);
  }

  ngOnInit(): void {}
}
