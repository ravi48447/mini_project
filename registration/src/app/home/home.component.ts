import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../Service/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  gotologin(){
    this._router.navigate(['/login'])
}

  

}
