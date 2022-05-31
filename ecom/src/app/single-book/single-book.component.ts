import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthSecurityService } from '../services/auth-security.service';
import { BookDataService } from '../services/book-data.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css'],
})
export class SingleBookComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  book: any;
  id: any;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private userService: UserDataService,
    private _bookData: BookDataService,
    private authService: AuthSecurityService
  ) {}
  sub: any;

  addToBag(bookId: any) {
    this.userService.addToBag(bookId).subscribe(
      (res) => {
        console.log('book added to cart');
        this.authService.changeNoOfBooks(this.authService.noOfBooksInCart + 1);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.id = params.get('id');
      this._bookData.getbook(this.id).subscribe((data) => {
        this.book = data;
        console.log(data, 'mai book hu');
      });
      console.log(this.id, 'Mai id hu');
    });
  }
}
