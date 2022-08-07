import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Class/user';
import { HttpClient } from '@angular/common/http'; 
import { Prof } from '../Class/prof';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

   constructor(private _httpt: HttpClient) { 

   }
    
   loginUserFromDatabase(user: User):Observable<any> {
      return this._httpt.post<any>("http://localhost:8080/loginuser", user)
   }

   signupUserFromDatabase(user: User):Observable<any> { 
        console.log("Signup wotking");                        //Database access for signup
        return this._httpt.post<any>("http://localhost:8080/signupuser", user)
      
   }
   signupProfFromDatabase(prof : Prof):Observable<any> { 
       console.log("Signup wotking");                        //Database access for signup
       return this._httpt.post<any>("http://localhost:8080/signupprof", prof)
  
    }
    getProfFromDatabase():Observable<any> {
      console.log("Signup wotking");                        //Database access for signup
       return this._httpt.get<any>("http://localhost:8080/getprof");
    }
    getDataFromCity(city:string | undefined) : Observable<any> {
      console.log("searching for city working");
      return this._httpt.post<any>("http://localhost:8080/getprofCity", city);    
    }

}
