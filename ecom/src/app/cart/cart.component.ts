import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDataService } from '../services/book-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  bag: any[] = [];

  totalCost: number = 0;
  constructor(private bookData: BookDataService, private router: Router) {
    const bagdata = this.bookData.getBag();
    this.bag = bagdata;

    for (let i = 0; i < this.bag.length; i++) {
      this.totalCost = this.totalCost + Number(this.bag[i].bookPrice);
    }
    console.log(this.bag, 'lo mai bag hu aa gya');
  }

  redirect() {}

  removeItem(id: any) {
    let bg = this.bookData.removeCartItem(id);
    this.bag = bg;
   this.totalCost=0;
    for (let i = 0; i < this.bag.length; i++) {
      this.totalCost = this.totalCost + Number(this.bag[i].bookPrice);
    }

  }
 
  checkout(){
   
  }

  ngOnInit(): void {}
}
