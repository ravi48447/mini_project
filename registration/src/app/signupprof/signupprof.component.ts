import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prof } from '../Class/prof';
import { RegistrationService } from '../Service/registration.service';

@Component({
  selector: 'app-signupprof',
  templateUrl: './signupprof.component.html',
  styleUrls: ['./signupprof.component.css']
})
export class SignupprofComponent implements OnInit {

  prof = new Prof();
  msg= "";
  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  signupProf(){
    this._service.signupProfFromDatabase(this.prof).subscribe(
      data => {
        this.msg="Registration succesfull";       //Acording to requirement we created first path here now will add to app-routing.module.ts
    },
    error => {
        console.log("Error occured");
        this.msg = error.error;
    }
    )
  }

}
