import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { ProfdatabaseComponent } from './profdatabase/profdatabase.component';
import { SearchFromCityComponent } from './search-from-city/search-from-city.component';
import { SignupComponent } from './signup/signup.component';
import { SignupprofComponent } from './signupprof/signupprof.component';

const routes: Routes = [
  {path: '', component :HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'loginsuccess', component: LoginsuccessComponent},   //First created in login.ts
  {path: 'signup' , component: SignupComponent},
  {path: 'signupprof' , component: SignupprofComponent},
  {path: 'profdatabase', component: ProfdatabaseComponent},
  {path: 'searchfromcity', component: SearchFromCityComponent},
  {path: 'book', component: BookComponent}

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
