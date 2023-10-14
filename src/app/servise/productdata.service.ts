import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private _HttpClient:HttpClient) { }

countwish:BehaviorSubject<any>= new BehaviorSubject(0)
  getallproducts(e:number=1):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${e}`)
  }
  category():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  
  categorydetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }

  details(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  detailsdata(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  brands():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
  }
  brandsdetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands/${id}`)
  }
}
