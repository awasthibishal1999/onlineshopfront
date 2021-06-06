import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  categories:Category[] = [];
  
  constructor(private _productService:ProductService) { }

  ngOnInit(){
    this.listProductCategories();
    
  }
  listProductCategories(){
    this._productService.getCategories().subscribe(
      data=>this.categories=data
    );

  }

}

