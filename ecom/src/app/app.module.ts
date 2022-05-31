import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { SingleBookComponent } from './single-book/single-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashBookListComponent } from './dash-book-list/dash-book-list.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { AuthSecurityService } from './services/auth-security.service';
import { AuthGuard } from './auth-guard.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { SearchComponent } from './search/search.component';
import { MyordersComponent } from './myorders/myorders.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    NotFoundPageComponent,
    AddUserComponent,
    CartComponent,
    ProfileComponent,
    BookListComponent,
    LoginComponent,
    SingleBookComponent,
    AddBookComponent,
    FooterComponent,
    DashBookListComponent,
    EditFormComponent,
    PaymentComponent,
    SearchComponent,
    MyordersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthSecurityService,
    AuthGuard,
    [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
