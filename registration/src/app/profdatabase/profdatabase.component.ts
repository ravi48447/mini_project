import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prof } from '../Class/prof';
import { RegistrationService } from '../Service/registration.service';

@Component({
  selector: 'app-profdatabase',
  templateUrl: './profdatabase.component.html',
  styleUrls: ['./profdatabase.component.css']
})
export class ProfdatabaseComponent implements OnInit {
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

        console.log("Error In getListOfServices IN list of services component");

      }

    )
  }

}
