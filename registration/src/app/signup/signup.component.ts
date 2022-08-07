import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Class/user';
import { RegistrationService } from '../Service/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user= new User();
  msg= '';

  constructor(private _service : RegistrationService, private _router: Router) {   

   }

  ngOnInit(): void {
  }

  signupUser(){
    this._service.signupUserFromDatabase(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/profdatabase'])
               //Acording to requirement we created first path here now will add to app-routing.module.ts
    },
    error => {
        console.log("Error occured");
        this.msg = error.error;
    }
    )
  }
  // gotosignup(){
  //   this._router.navigate(['/profdatabase'])
  // }
}
