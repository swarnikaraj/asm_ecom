import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { AddUserComponent } from './add-user/add-user.component';
import { DashBookListComponent } from './dash-book-list/dash-book-list.component';

import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SingleBookComponent } from './single-book/single-book.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  { path: 'dashboard/books', component: DashBookListComponent },

  {
    path: '',
    component: HomeComponent,

    children: [],
  },

  { path: 'register', component: AddUserComponent },
  {
    path: 'login',
    component: LoginComponent,
    children: [{ path: 'register', component: AddUserComponent }],
  },

  { path: 'book/:id', component: SingleBookComponent },

  {
    path: 'profile/:id',
    component: ProfileComponent,
    children: [{ path: 'cart', component: CartComponent }],
  },

  { path: 'cart', component: CartComponent },

  { path: 'payment', component: PaymentComponent },

  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
