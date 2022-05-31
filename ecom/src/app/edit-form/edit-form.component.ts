import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
