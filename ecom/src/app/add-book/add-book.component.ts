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
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  constructor(private contactData: BookDataService) {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    console.log(data);
    console.log(this.addForm.value, 'Hello');
    this.contactData.saveBook(data).subscribe((data) => console.log(data));
    alert('Contact has been added');
  }

  get name() {
    return this.addForm.get('name');
  }

  get price() {
    return this.addForm.get('price');
  }

  get author() {
    return this.addForm.get('author');
  }

  get category() {
    return this.addForm.get('category');
  }
}
