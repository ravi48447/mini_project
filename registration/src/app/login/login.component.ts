import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../Class/user";
import { RegistrationService } from "../Service/registration.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.html']
})
export class LoginComponent implements OnInit{
  
    user = new User();
    msg='';
    constructor(private _service : RegistrationService, private _router: Router){
    }

    ngOnInit() {
        
    }
    loginUser() {
            console.log("Function is called");
        this._service.loginUserFromDatabase(this.user).subscribe(
            data => {
                console.log("response recieved");
                this._router.navigate(['/searchfromcity']);              //Acording to requirement we created first path here now will add to app-routing.module.ts
                this.msg="Login Successful"
            },
            error => {
                console.log("Error occured");
                this.msg = "login failed, please enter right details"
            }
        )
    }

    gotosignup(){
        this._router.navigate(['/signup'])
    }

    gotosignupprof(){
        this._router.navigate(['/signupprof'])
    }
    
}