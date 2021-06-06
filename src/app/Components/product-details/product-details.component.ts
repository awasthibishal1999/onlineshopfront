import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/cart-item';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product =new Product();

  constructor(private _activatedRoute:ActivatedRoute,
    private _productService:ProductService,
    private _cartService:CartService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(
      ()=>{
        this.getProductInfo();
      }
    )
  }
  getProductInfo(){
    const id:number= +this._activatedRoute.snapshot.paramMap.get('id')!;
    this._productService.getDetails(id).subscribe(
      data=>{
        this.product=data;

      }
    )
  }
  addToCart(){
    const cartItem= new CartItem(this.product);
    this._cartService.addToCart(cartItem);
  }

}
