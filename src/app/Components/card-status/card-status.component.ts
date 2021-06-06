import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit {

  totalPrice:number=0;
  totalQuantity:number=0;

  constructor(private _cartService:CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }
  updateCartStatus() {
    this._cartService.totalPrice.subscribe(
      data=> this.totalPrice=data
    )
    this._cartService.totalQuantity.subscribe(
      data=> this.totalQuantity=data
    )
  }

}
