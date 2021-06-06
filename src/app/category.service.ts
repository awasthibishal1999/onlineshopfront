import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiServerUrl ="http://localhost:8081/api/v1/products";

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiServerUrl}/category/all`);
}
public addCategory(category: Category): Observable<Category>{
  return this.http.post<Category>(`${this.apiServerUrl}/category/add`, category);
}
public updateCategory(category: Category): Observable<Category>{
  return this.http.put<Category>(`${this.apiServerUrl}/category/update`, category);
}
public deleteCategory(categoryId: number): Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/category/delete/${categoryId}`);
}




}
