import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  modal: boolean = false;
  modalBtn() {
    this.modal = !this.modal;
  }

  addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
   
  });

  constructor(private userData:UserDataService) {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    console.log(data)
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
