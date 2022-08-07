import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import  {HttpClientModule} from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SignupprofComponent } from './signupprof/signupprof.component';
import { ProfdatabaseComponent } from './profdatabase/profdatabase.component';
import { SearchFromCityComponent } from './search-from-city/search-from-city.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LoginsuccessComponent,
    HomeComponent,
    SignupprofComponent,
    ProfdatabaseComponent,
    SearchFromCityComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // SignupComponent,
    HttpClientModule,
    FormsModule,    //Without adding FormsModule error was coming for ngForm in login.html
    // RouterModule.forRoot([
    //   {path: '' , component: LoginComponent},
    //   {path: 'loginsuccess', component: LoginsuccessComponent},   //First created in login.ts  
    // ])
  

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
