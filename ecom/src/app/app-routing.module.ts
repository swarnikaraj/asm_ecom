import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { AddUserComponent } from './add-user/add-user.component';

import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  {
    path: '',
    component: HomeComponent,

    children: [{ path: 'register', component: AddUserComponent }],
  },

  { path: '**', component: NotFoundPageComponent },

  { path: 'profle/:id', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
