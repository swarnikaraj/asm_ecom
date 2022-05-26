import { Component } from '@angular/core';
import { BookDataService } from './services/book-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ecom';
  cartNum: number = 0;
  bookList:any;
  catList:any[]=[];
  constructor(private bookData: BookDataService) {

    this.bookData.books().subscribe(data=>{
      
    this.bookList=data;

    for(let i=0;i<this.bookList.length;i++){
      let t= this.bookList[i].category;
      if(!this.catList.includes(t)){this.catList.push(t)}
    }

    this.cartNum = bookData.cartNum;
  })
}
  searchString: String = '';


  filterByCat() {
    console.log('filter applied');
  }
  filterByAuth() {
    console.log('filter applied');
  }
  highToRating() {
    console.log('filter applied');
  }

  showTopRated() {
    console.log('filter applied');
  }

  searchBooks(search: any) {
    console.log(search);
  }

}
