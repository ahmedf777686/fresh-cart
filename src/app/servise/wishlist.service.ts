import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token:any={
    token:localStorage.getItem('stoken')
  }
  constructor(private _HttpClient:HttpClient) { }

  addwish(id:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      productId: id
  },
  {
    headers:this.token
  }
    
    )
  }
  getwish():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
   
  {
    headers:this.token
  }
    
    )
  }
 removewish(id:any):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
   
  {
    headers:this.token
  }
    
    )
  }

}
