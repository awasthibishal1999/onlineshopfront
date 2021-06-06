import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartItem } from 'src/app/cart-item';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-productlist',
 // templateUrl: './productlist.component.html',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
 // dtOptions: DataTables.Settings = {};
  public products: Product[] = [];
  currentCategoryId!:number;
  searchMode!:boolean;
  pageOfItems!:Array<Product>;
  pageSize:number=6;

  constructor(private productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _cartService:CartService
    ) { }
// private _ngxSpinner:NgxSpinnerService
  ngOnInit(){
      this.listProducts();
    this._activatedRoute.paramMap.subscribe(()=>{
     this.listProducts();
    }
    )
  }

  pageClick(pageOfItems:Array<Product>){
    this.pageOfItems=pageOfItems;

  }

listProducts(){
this.searchMode=  this._activatedRoute.snapshot.paramMap.has('keyword');
//this._ngxSpinner.show();
if(this.searchMode){
  this.handleSearchProducts();

}
else{
  this.handleListProducts();
}
 
}

handleListProducts(){
  const hasCategoryId:boolean =this._activatedRoute.snapshot.paramMap.has('id');
  if(hasCategoryId){
    this.currentCategoryId= +this._activatedRoute.snapshot.paramMap.get('id')!;
  }else{
  this.currentCategoryId=1;
  }
this.productService.getProducts(this.currentCategoryId).subscribe(
        data=>this.products=data
    );

}
handleSearchProducts(){
 const keyword:string= this._activatedRoute.snapshot.paramMap.get('keyword')!;

 this.productService.searchProducts(keyword).subscribe(
   data=>{
     this.products=data;
   }
 )

}
addToCart(product:Product){
  console.log(`product name:${product.name}, and price:${product.unitPrice}`);

  const cartItem = new CartItem(product);
  this._cartService.addToCart(cartItem);

}





    }
