import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserDataService } from "../services/user-data.service";
@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  @ViewChild("form") signupForm: NgForm | undefined;
  modal: boolean = false;
  modalBtn() {
    this.modal = !this.modal;
  }

  // user:Object={
  //   name: "",
  //   password: ""
  // }

  user: any = {
    userName: "",
    password: "",
  };

  constructor(private userData: UserDataService, private route: Router) {}

  ngOnInit(): void {}

  formdata() {
    console.log(this.user);
    this.userData.saveUser(this.user).subscribe(
      (res) => {
        alert("Succcesfully subscribed");
        this.route.navigate(["login"]);
      },
      (err) => {
        console.log(err);
        alert("User already exist, Please use unique UserName");
        this.route.navigate(["/register"]);
      }
    );
  }
  // get name() {
  //   return this.addForm.get('name');
  // }

  // get price() {
  //   return this.addForm.get('price');
  // }

  // get author() {
  //   return this.addForm.get('author');
  // }

  // get category() {
  //   return this.addForm.get('category');
  // }
}
