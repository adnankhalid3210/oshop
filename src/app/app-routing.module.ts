import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
{ path: '', component:HomeComponent},
{ path: 'products', component:ProductsComponent},
{ path: 'shopping-cart', component:ShoppingCartComponent},
{ path: 'check-out', component:OrderSuccessComponent},
{ path: 'my-orders', component:MyOrdersComponent},
{ path: 'login', component:LoginComponent},
{ path: 'admin/products', component:AdminProductsComponent},
{ path: 'admin/orders', component:OrderSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
