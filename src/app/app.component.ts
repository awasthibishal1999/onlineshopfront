import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';


import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

 

 
//public products: Product[] = [];


 constructor(){}

   ngOnInit(){

   }
 
//   public getProducts():void{
//    this.productService.getProducts().subscribe(
//  (response:Product[]) =>{
//     this.products=response;
//       },
//     (error:HttpErrorResponse) =>{
//     alert(error.message);
//       }



//    );


//     } 
  
  }  

