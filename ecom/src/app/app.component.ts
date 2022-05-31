import { Component, OnInit } from '@angular/core';
import { AuthSecurityService } from './services/auth-security.service';
import { BookDataService } from './services/book-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ecom';
  loggedIn: boolean = false;
  cartnum: number = 0;
  isUserLoggedIn: boolean = false;
  isAdminLoggedIn:boolean = false;

  bookList: any;
  catList: any[] = [];
  constructor(
    private bookData: BookDataService,
    private authService: AuthSecurityService
  ) {
    this.bookData.books().subscribe((data) => {
      this.bookList = data;

      for (let i = 0; i < this.bookList.length; i++) {
        let t = this.bookList[i].category;
        if (!this.catList.includes(t)) {
          this.catList.push(t);
        }
      }
    });
  }

  logOut() {
    this.authService.logout();
    // location.reload();
    window.location.href = '/';
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();
    this.cartnum = Number(this.authService.getNoOfCartItems());
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
    this.isAdminLoggedIn = this.authService.isAdminLoggedIn();

    this.authService.changeNoOfBooks(this.cartnum);
    this.authService.newNoOfBooks.subscribe({
      next: (data) => {
        this.cartnum = data;
        console.log('Logged in');
      },
    });
   
  }
}
