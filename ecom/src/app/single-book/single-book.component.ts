import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { BookDataService } from '../services/book-data.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css'],
})
export class SingleBookComponent implements OnInit {
  book: any;
  id: any;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _bookData: BookDataService
  ) {}
  sub: any;

  addToBag(book:any){

    this._bookData.addToBag(book);

  }
  
  ngOnInit(): void {
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
