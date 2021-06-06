import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { CartDetailsComponent } from './Components/cart-details/cart-details.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: 'cart-details', component: CartDetailsComponent},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'products', component: ProductlistComponent },
  { path: 'category/:id', component: ProductlistComponent },
  { path: 'search/:keyword', component: ProductlistComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: '**',component:PageNotFoundComponent},
  { path: '', redirectTo:'products',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
