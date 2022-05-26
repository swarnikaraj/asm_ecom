import { Component, OnInit } from '@angular/core';

import { BookDataService } from '../services/book-data.service';
import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  show: boolean = false;
  data: any;
  str: String = '';
  constructor(private bookData: BookDataService) {}
  showSearches(val: boolean) {
    this.show = val;
  }
  searchBooks(event: any) {
    var st = event.target.value;

    

    this.str = st;
    if (st.length > 2) {
      this.bookData.getSearchData(st).subscribe((data) => {
        this.data = data;
        console.log(data);
      });
      console.log(st);
    }
  }

  takeToOneSearch() {}

  ngOnInit(): void {
    const searchBox = document.getElementById('searchbox') as HTMLInputElement;
    const typeahead = fromEvent(searchBox, 'input').pipe(
      map((e) => (e.target as HTMLInputElement).value),
      filter((text) => text.length > 2),
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap((searchTerm) =>
        ajax(`http://localhost:8080/books/search${searchTerm}`)
      )
    );

    typeahead.subscribe((data) => {
      console.log(data);
    });

  }
}
