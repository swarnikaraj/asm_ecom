import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BookDataService } from '../services/book-data.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  addForm = new FormGroup({
    bookName: new FormControl('', [Validators.required]),
    bookPrice: new FormControl('', [Validators.required]),
    bookAuthorName: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
    bookDescription: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
  });

  constructor(private bookData: BookDataService) {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    console.log(data);
    console.log(this.addForm.value, 'Hello');
    this.bookData.saveBook(data).subscribe((data) => console.log(data));
    alert('Book has been added');
    this.addForm.reset();
  }

  get bookName() {
    return this.addForm.get('name');
  }

  get bookPrice() {
    return this.addForm.get('price');
  }

  get bookAuthorName() {
    return this.addForm.get('author');
  }

  get category() {
    return this.addForm.get('category');
  }

  get quantity() {
    return this.addForm.get('category');
  }

  get url() {
    return this.addForm.get('category');
  }

  get bookDescription() {
    return this.addForm.get('category');
  }

  get rating() {
    return this.addForm.get('category');
  }
}
