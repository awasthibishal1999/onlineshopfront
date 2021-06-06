import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product';
import { CategoryService } from './category.service';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl ="http://localhost:8081/api/v1/products";
  private categoryUrl ="http://localhost:8081/api/v1/product-category";

  constructor(private http: HttpClient) { }

  public getProducts(theCategoryId:number): Observable<Product[]>{
    const searchUrl=`${this.apiServerUrl}/search/categoryid?id=${theCategoryId}`;
    return this.getProductsList(searchUrl);
}
private getProductsList(searchUrl:string):Observable<Product[]>{
  return this.http.get<GetResponseProducts>(searchUrl).pipe(
    map(response=>response._embedded.products)
  )

}

public getCategories():Observable<Category[]>{
return this.http.get<GetResponseCategory>(this.categoryUrl).pipe(
  map(response=>response._embedded.category)
);
}
public searchProducts(keyword:String): Observable<Product[]>{
  const searchUrl=`${this.apiServerUrl}/search/searchbykeyword?name=${keyword}`;
  return this.getProductsList(searchUrl);
}
public getDetails(productId:number):Observable<Product>{
  const productDetailsUrl=`${this.apiServerUrl}/${productId}`;
 return this.http.get<Product>(productDetailsUrl);
}
}
interface GetResponseProducts{
  _embedded:{
    products:Product[];

  }
}
interface GetResponseCategory{
  _embedded:{
    category:Category[];

  }
}


