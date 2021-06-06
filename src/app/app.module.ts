import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { FooterComponent } from './Components/footer/footer.component';

import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DataTablesModule } from 'angular-datatables';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductCategoryComponent } from './Components/product-category/product-category.component';
import { SearchComponent } from './Components/search/search.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CardStatusComponent } from './Components/card-status/card-status.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CartDetailsComponent } from './Components/cart-details/cart-details.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    FooterComponent,
    ProductlistComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProductCategoryComponent,
    SearchComponent,
    ProductDetailsComponent,
    CardStatusComponent,
    CartDetailsComponent,
    LoginComponent,
    RegisterComponent
   
   
  

 
  
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
