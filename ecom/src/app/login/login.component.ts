import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSecurityService } from '../services/auth-security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authSecurityService: AuthSecurityService,
    private router: Router
  ) {}

  user: any = {
    username: '',
    password: '',
  };

  ngOnInit(): void {}

  login() {
    this.authSecurityService.generateToken(this.user);
  }
}
