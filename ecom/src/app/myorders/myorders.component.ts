import { Component, OnInit } from "@angular/core";
import { UserDataService } from "../services/user-data.service";

@Component({
  selector: "app-myorders",
  templateUrl: "./myorders.component.html",
  styleUrls: ["./myorders.component.css"],
})
export class MyordersComponent implements OnInit {
  orders: any[] = [];
  constructor(private userData: UserDataService) {
    const od = userData.getMyOrders().subscribe((res: any) => {
      console.log(res, "i am orders");
      this.orders = res;
    });
  }

  ngOnInit(): void {}
}
