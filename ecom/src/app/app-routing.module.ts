import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { AddUserComponent } from './add-user/add-user.component';

import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

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

  {
    path: 'profile/:id',
    component: ProfileComponent,
    children: [{ path: 'cart', component: CartComponent }],
  },

  { path: 'cart', component: CartComponent },

  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
