import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../services/book-data.service';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-dash-book-list',
  templateUrl: './dash-book-list.component.html',
  styleUrls: ['./dash-book-list.component.css'],
})
export class DashBookListComponent implements OnInit {
  isList: number = 5;
  isMenu: boolean = false;

  editMode:boolean=false;

  tempBook:any={};

  books: any;
  constructor(private bookData: BookDataService) {
    bookData.books().subscribe((data) => {
      this.books = data;
      console.log(this.books);
    });
  }
  del(id: any) {
    alert('item deleted' + id);

    this.bookData.delMe(id).subscribe((res) => {
      console.log(res);
    });

    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id == id) {
        this.books.splice(i, 1);
        break;
      }
    }
    
    
  }

  letEdit(docId: any) {
    var el = document.createElement('h1');
    el.textContent = 'Hello';

    document.getElementById(docId)?.nextSibling?.appendChild(el);
    console.log(docId);
  }

  setEditMode(bools:boolean,id:any){
    this.editMode=bools;
  }
  ngOnInit(): void {}
}
