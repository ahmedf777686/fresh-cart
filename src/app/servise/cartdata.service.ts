import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {
token:any={
  token:localStorage.getItem('stoken')
}
countnav:BehaviorSubject<any>= new BehaviorSubject(0)

  constructor( private _HttpClient:HttpClient) { }
Addtocart(id:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
  
  {
    productId: id
},
{
  headers:this.token
}
  
  )
}


getdata():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
  
 
{
  headers:this.token
}
  
  )
}

removecart(id:any):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
  
 
{
  headers:this.token
}
  
  )
}
clearcart():Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
  
 
{
  headers:this.token
}
  
  )
}

updatacart(id:any,count:any):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,

  {
   count: count
},
{
  headers:this.token
}
  
 

  
  )
}

}
