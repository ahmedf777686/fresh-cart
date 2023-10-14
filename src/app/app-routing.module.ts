import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { frashcartGuard } from './guards/frashcart.guard';

const routes: Routes = [
  {path:'', canActivate:[frashcartGuard]  ,loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent)},
{path:'details/:id',loadComponent:()=>import('./components/details/details.component').then((m)=>m.DetailsComponent)},
{path:'Cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent)},
{path:'allorders',loadComponent:()=>import('./components/allorders/allorders.component').then((m)=>m.AllordersComponent)},
{path:'wishlist',loadComponent:()=>import('./components/wishlist/wishlist.component').then((m)=>m.WishlistComponent)},
{path:'payment/:id',loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent)},
{path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent)},
{path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent)},
{path:'catdetails/:id',loadComponent:()=>import('./components/catdetails/catdetails.component').then((m)=>m.CatdetailsComponent)},
{path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent)},


]

},
{path:'',loadComponent:()=>import("./layouts/auth-layout/auth-layout.component").then((m)=>m.AuthLayoutComponent),children:[

{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent)},
  {path:'forgotpassword',loadComponent:()=>import('./components/forgotpassword/forgotpassword.component').then((m)=>m.ForgotpasswordComponent)},
  {path:'rehister',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent)},
]},
{path:'**',loadComponent:()=>import('./components/not-found/not-found.component').then((m)=>m.NotFoundComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
