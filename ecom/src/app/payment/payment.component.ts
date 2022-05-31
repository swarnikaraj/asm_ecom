import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthSecurityService } from '../services/auth-security.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  amount: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthSecurityService
  ) {}

  ngOnInit(): void {
    this.amount = this.authService.totalAmount;
  }

  paid() {
    this.authService.payment().subscribe((res) => {
      alert('Payment Successful');
      this.authService.changeNoOfBooks(0);
      localStorage.setItem('noOfCart', '0');
      this.router.navigate(['/']);
    });
  }
}
