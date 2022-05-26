import { Component } from '@angular/core';
import { BookDataService } from './services/book-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ecom';
  
  bookList:any;
  catList:any[]=[];
  constructor(private bookData: BookDataService) {

    this.bookData.books().subscribe(data=>{
      
    this.bookList=data;

    for(let i=0;i<this.bookList.length;i++){
      let t= this.bookList[i].category;
      if(!this.catList.includes(t)){this.catList.push(t)}

    }

  })
}
  
 cartNum(){
   return this.bookData.getCartNum();
 }

  



}
