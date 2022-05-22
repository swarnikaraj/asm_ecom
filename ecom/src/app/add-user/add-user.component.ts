import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
