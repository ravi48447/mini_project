import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prof } from '../Class/prof';
import { RegistrationService } from '../Service/registration.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  prof: Prof = new Prof;
  listOfProf= null;
  msg= "";
  
  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
  getDatabase(){
    console.log("Get Database Function is called");
    this._service.getProfFromDatabase().subscribe(

      (response) => {
        console.log(response);
        this.listOfProf = response;
      },
      error => {

        console.log("Error in list of services component");
      }

    )
  }
  searchFromCity(){
    this._router.navigate(['/searchfromcity'])
  }

  searchProf(){
    this._router.navigate(['/profdatabase'])
  }

}
