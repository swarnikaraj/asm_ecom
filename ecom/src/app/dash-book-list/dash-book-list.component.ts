import { Component, OnInit } from "@angular/core";
import { BookDataService } from "../services/book-data.service";
import { EditFormComponent } from "../edit-form/edit-form.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-dash-book-list",
  templateUrl: "./dash-book-list.component.html",
  styleUrls: ["./dash-book-list.component.css"],
})
export class DashBookListComponent implements OnInit {
  isList: number = 5;
  isMenu: boolean = false;

  editMode: boolean = false;
  editId: any;

  tempBook: any = {
    bookName: "",
    bookPrice: "",
    bookAuthorName: "",
    category: "",
    quantity: "",
    url: "",
    bookDescription: "",
    rating: "",
  };

  editForm = new FormGroup({
    bookName: new FormControl("", [Validators.required]),
    bookPrice: new FormControl("", [Validators.required]),
    bookAuthorName: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    quantity: new FormControl("", [Validators.required]),
    url: new FormControl("", [Validators.required]),
    bookDescription: new FormControl("", [Validators.required]),
    rating: new FormControl("", [Validators.required]),
  });

  books: any;
  constructor(private bookData: BookDataService) {
    this.totalBooks();
  }

  totalBooks() {
    this.bookData.books().subscribe((data) => {
      this.books = data;
      console.log(this.books);
    });
  }

  del(id: any, name: string) {
    alert("item deleted " + name);

    this.bookData.delMe(id).subscribe((res) => {
      console.log(res);
      this.totalBooks();
    });

    // for (let i = 0; i < this.books.length; i++) {
    //   if (this.books[i].id == id) {
    //     this.books.splice(i, 1);
    //     break;
    //   }
    // }
  }

  setEditMode(Id: any, book: any) {
    this.editMode = !this.editMode;
    this.editId = Id;

    (this.tempBook.Name = book.bookName),
      (this.tempBook.bookPrice = book.bookPrice),
      (this.tempBook.bookAuthorName = book.bookAuthorName),
      (this.tempBook.category = book.category),
      (this.tempBook.quantity = book.quantity),
      (this.tempBook.url = book.url),
      (this.tempBook.bookDescription = book.bookDescription),
      (this.tempBook.rating = book.rating);

    console.log(this.tempBook);
  }

  ngOnInit(): void {}
  onSubmit(data: any) {
    console.log(data);
    console.log(this.editForm.value, "Hello");

    this.bookData
      .updateBook(this.editId, data)
      .subscribe((res) => console.log(res));

    this.editForm.reset();
    alert("Sucessfully Edited");
    this.editMode = !this.editMode;
  }

  get bookName() {
    return this.editForm.get("name");
  }

  get bookPrice() {
    return this.editForm.get("price");
  }

  get bookAuthorName() {
    return this.editForm.get("author");
  }

  get category() {
    return this.editForm.get("category");
  }

  get quantity() {
    return this.editForm.get("quantity");
  }

  get url() {
    return this.editForm.get("url");
  }

  get bookDescription() {
    return this.editForm.get("bookDescription");
  }

  get rating() {
    return this.editForm.get("rating");
  }
}
