import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prof } from '../Class/prof';
import { RegistrationService } from '../Service/registration.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-search-from-city',
  templateUrl: './search-from-city.component.html',
  styleUrls: ['./search-from-city.component.css']
})
export class SearchFromCityComponent implements OnInit {

  prof: Prof = new Prof;
  listOfDatabase= null;
  
  msg= "";


  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  getCity(city: string| undefined) {
    console.log("Get city Function is called", city);
    this._service.getDataFromCity(city).subscribe(
      (response) => {
        console.log(response);
        this.listOfDatabase  = response; 
      },
      error => {
        console.log("Error ");
      }
    )
  }

}
// Products from the API 
// getProducts(categoryId?: number): void {
//   if (categoryId) {
//       this.productService.getProducts()
//           .then(products => {
//               this.products = products.filter((product: Product) => product.categoryId === categoryId);
//           });        
//   } else {
//       this.productService.getProducts()
//           .then(products => this.products = products);
//   }
// }

//
 


